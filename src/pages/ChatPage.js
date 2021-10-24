import React, { useContext } from 'react';
import '../css/chat.css';
import { Leftuser } from '../components/Leftuser';
import { Messages } from '../components/Messages';
import { ChatSelect } from '../components/ChatSelect';

import { Rightuser } from '../components/Rightuser';
import { ChatContext } from '../context/chat/ChatContext';


export const ChatPage = () => {

    const { chatState } = useContext( ChatContext)
    return (
        <div className="row g-0">
            <Leftuser/>
            <div className="col-lg-8">
            {/* <Messages/> */}
                {
                    ( chatState.chatActivo )
                        ? <Messages/>
                        : <ChatSelect/>
                }
                
                
                
            </div>
            <Rightuser/>
        </div>
    )
}
