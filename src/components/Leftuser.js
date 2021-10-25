import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';
import { SidebarChatItem } from './SidebarChatItem';

export const Leftuser = () => {

    const { chatState } = useContext( ChatContext );
    const { auth } = useContext( AuthContext);
    
    const { uid } = auth;
    

    
    return (
        
        <div className="col-lg-2 d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block">
            {
                chatState.usuarios
                    .filter( user => user.uid !== uid )
                    .map((usuario) => (
                    <SidebarChatItem 
                        key={ usuario.uid }
                        usuario={ usuario}
                    />
                ))
            }        
        </div>
    )
}
