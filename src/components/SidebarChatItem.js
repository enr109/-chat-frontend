import React,{ useContext } from 'react';
import { ChatContext } from '../context/chat/ChatContext';
import { types } from '../types/types';


export const SidebarChatItem = ({ usuario })  => {

    const { dispatch} = useContext(ChatContext);

    const onClick = () => {
        dispatch({
            type: types.activarChat,
            payload: usuario.uid
        });
    }

    
    return (
        
        <div>
            <img src={ usuario.imagen } alt="" width="150" height="150" className="imagen"/>
            
                <div className="text-center">
                </div>
                <div className="text-center">
                    <p className="card-text nombre">{usuario.nombre}</p>
                    <p className="card-text tel">{usuario.telefono}</p>
                    {
                        ( usuario.online ) 
                            ? <span className="text-success">Online</span>
                            : <span className="text-success">Offline</span>
                    }
                </div>
                <div 
                    className="chatimg text-center"
                    onClick={ onClick }
                >
                        <img src="https://i.ibb.co/zsC86g2/Vector.png" alt="" width="20" height="20"/>
                        <aside>Chat</aside>
                </div>
        </div>
    )
}
