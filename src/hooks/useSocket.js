import { useCallback, useEffect, useMemo, useState } from 'react';
import io  from 'socket.io-client';




export const useSocket = ( serverPath ) => {
    
    /* const socket = useMemo(() => io.connect( serverPath, {transports: ['websocket']} ), [ serverPath ] ); */
    const [socket, setsocket] = useState(null);
    const [ online, setOnline ] = useState(false);

    const conectarSocket = useCallback( () => {
        const socketTemp = io.connect( serverPath, {
            transports: ['websocket'],
            autoConnect: true,
            forceNew: true
        } );

        setsocket( socketTemp );

    },[ serverPath ]);


    const desconectarSocket = useCallback( () => {
        socket?.disconnect();

    },[ serverPath ]);

    useEffect(() => {
        setOnline( socket?.connected );
    }, [socket])

    useEffect(() => {
        socket?.on('connect', () => setOnline( true ));
    }, [ socket ])

    useEffect(() => {
        socket?.on('disconnect', () => setOnline( false ));
    }, [ socket ])

    return {
        socket,
        online,
        conectarSocket,
        desconectarSocket
    }
}