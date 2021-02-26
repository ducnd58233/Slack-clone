import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage';
import db from '../firebase';
import { useParams } from 'react-router-dom'; // look at the id
import firebase from 'firebase';

function Chat({ user }) {

    let { channelId } = useParams();
    const [ channel, setChannel ] = useState();
    const [ messages, setMessages ] = useState([]);

    const getMessages = () => {
        db.collection('rooms')
            .doc(channelId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) => {
                let messages = snapshot.docs.map((doc) => doc.data());
                setMessages(messages);
            })
    }

    const sendMessage = (text) => {
        if(channelId){
            let payload = {
                text: text,
                timestamp: firebase.firestore.Timestamp.now(),
                user: user.name,
                userImage: user.photo
            }
            db.collection("rooms").doc(channelId).collection('messages').add(payload)
        }
    }

    const getChannel = () => {
        db.collection('rooms')
            .doc(channelId)
            .onSnapshot((snapshot) => {
                setChannel(snapshot.data());
            }) 
            // snapshot is the data of channel
            // onSnapshot -> whenever the snapshot changed, we will modified something inside
    }

    useEffect(() => {
        getChannel();
        getMessages();
    }, [channelId]) // Whenever the channelId changed, useEffect will fire

    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        # { channel && channel.name }                      
                    </ChannelName>                         
                    <ChannelInfo>
                        Company-wide announcements and work-based matters
                    </ChannelInfo>            
                </Channel>
                <ChannelDetails>
                    <Detail>
                        Details
                    </Detail>
                    <Info/>               
                </ChannelDetails>             
            </Header>
            <MessageContainer>
                {
                    messages.length > 0 &&
                    messages.map((data, index) => (
                        <ChatMessage 
                            text = {data.text}
                            name = {data.user}
                            image = {data.userImage}
                            timestamp = {data.timestamp}
                        />
                    ))
                }              
            </MessageContainer>
            <ChatInput sendMessage={sendMessage}/>
        </Container>
    )
}

export default Chat;

const Container = styled.div `
    display: grid;
    grid-template-rows: 64px auto min-content;
    min-height: 0; 

`
// min-height: keeps the chat input bar fixed

const Header = styled.div `
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(83, 39, 83, .13);
    justify-content: space-between;
    
`

const MessageContainer = styled.div `
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`


const Channel = styled.div `
`

const ChannelDetails = styled.div `
    display: flex;
    align-items: center;
    color: #606060;
    

`

const ChannelName = styled.div `
    font-weight: 700;

`


const ChannelInfo = styled.div `
    font-weight: 400;
    color: #606060;
    font-size: 13px;
    margin-top: 8px;
`

const Detail = styled.div `

`

const Info = styled(InfoOutlinedIcon)`
    margin-left: 10px;
`

