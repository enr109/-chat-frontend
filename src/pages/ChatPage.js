import React from 'react';
import '../css/chat.css';
import { Leftuser } from '../components/Leftuser';
import { Messages } from '../components/Messages';
import { Navbar } from '../components/Navbar';
import { Rightuser } from '../components/Rightuser';

export const ChatPage = () => {
    return (
        <div className="row g-0">
            <Leftuser/>
            <div className="col-lg-8">
                <Navbar/>
                {/* <div className="col-lg-8"> */}
                    <Messages/>
                {/* </div> */}
                
            </div>
            <Rightuser/>
        </div>
    )
}
