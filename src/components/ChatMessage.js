import React from 'react'
import styled from 'styled-components'

function ChatMessage({ text, name, image, timestamp }) {
    return (
        <Container>
            <UserAvatar>
                <img src={image} />
            </UserAvatar>
            <MessageContent>
                <Name>
                    {name}
                    <span>{new Date(timestamp.toDate().toUTCString()).toUTCString()}</span>
                </Name>
                <Text>
                    {text}
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div `
    padding: 8px 20px;
    display: flex;
    align-items: center;
`

const UserAvatar = styled.div `
    width: 36px;
    height: 36px;
    border-radius: 2px;
    overflow: hidden;
    margin-right: 8px;

    img {
        width: 100%;
    }
`

const MessageContent = styled.div `
    display: flex;
    flex-direction: column;
    :hover {
        background: #f2f0f1;
    }
`

const Name = styled.span `
    font-weight: 800;
    font-size: 15px;
    color: #590c3d;
    line-height: 1.4;
    span {
        font-weight: 300;
        color: rgb(97,96,97);
        margin-left: 8px;
        font-size: 13px;
    }
`

const Text = styled.span `
   
`
