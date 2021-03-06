import React,{ useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';

import { IncomingMessage } from './IncomingMessage';
import { Navbar } from './Navbar';
import { OutgoingMessage } from './OutgoingMessage';
import { SendMessage } from './SendMessage';

export const Messages = () => {

    const { chatState } = useContext( ChatContext);
    const { auth } = useContext(AuthContext);

    return (
        <div>
            <Navbar/>
        <div className="mesgs">

            {/* <!-- Historia inicio --> */}
            <div
                id="mensaje"
                className="msg_history"
            >

                {/* <IncomingMessage/>
                <OutgoingMessage/> */}

                {
                    chatState.mensajes.map( msg => (
                        ( msg.para._id === auth.uid )
                            ? <IncomingMessage key={ msg._id } msg={ msg } />
                            : <OutgoingMessage key={ msg._id } msg={ msg } />
                    ))
                }

                

            </div>
            {/* <!-- Historia Fin --> */}

           <SendMessage />

        </div>
        </div>
    )
}
