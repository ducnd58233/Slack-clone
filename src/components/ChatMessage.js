import React from 'react'
import styled from 'styled-components'

function ChatMessage() {
    return (
        <Container>
            <UserAvatar>
                <img src="https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-9/143109170_1825128844313788_4700433637394761534_n.jpg?_nc_cat=109&ccb=3&_nc_sid=09cbfe&_nc_ohc=_6Ir-J18a6QAX9L5zqu&_nc_ht=scontent.fsgn5-7.fna&oh=05fc116f979b1e6e958271aa9e2b45b0&oe=605B5DA0" />
            </UserAvatar>
            <MessageContent>
                <Name>
                    Duc
                    <span>2/23/2021 11:13:55 AM</span>
                </Name>
                <Text>
                    This is the best Challenge
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
