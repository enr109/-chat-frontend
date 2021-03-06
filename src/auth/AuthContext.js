import React, { createContext, useCallback,useState} from "react";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";

 export const AuthContext = createContext();

 const initialState = {
     uid: null,
     checking: true,
     logged: false,
     name: null,
     email: null,
     tel: null,
     image: null,
     age: null,
     priority: null,
     problem: null,
     promotion: null,
     curp: null,
 };


 export const AuthProvider = ({ children }) => {

    const [ auth, setAuth ] = useState(initialState)

    const login =  async( email, password ) => {

        const resp = await fetchSinToken('login', { email, password }, 'POST');

        
        
        if ( resp.ok ) {
            localStorage.setItem('token', resp.token);
            const { usuario } = resp;

            setAuth({
                uid: usuario.uid,
                checking: false,
                logged: true,
                name: usuario.nombre,
                email: usuario.email,
                tel: usuario.telefono,
                image: usuario.imagen,
                age: usuario.edad,
                priority: usuario.prioridad,
                problem: usuario.problema,
                promotion: usuario.promocion,
                curp: usuario.curp,
            });

            console.log('Autenticado!');
        }

        return resp.ok;
    }

    const verificaToken = useCallback( async() => {
        const token = localStorage.getItem('token');

        // si el token no existe
        if ( !token ) {
            setAuth({
                uid: null,
                checking: false,
                logged: false,
                name: null,
                email: null,
                tel: null,
                image: null,
                age: null,
                priority: null,
                problem: null,
                promotion: null,
                curp: null,
            })
            return false;
        }

        const resp = await fetchConToken('login/renew');
        if ( resp.ok ) {

            localStorage.setItem('token', resp.token);
            const { usuario } = resp;

            setAuth({
                uid: usuario.uid,
                checking: false,
                logged: true,
                name: usuario.nombre,
                email: usuario.email,
                tel: usuario.telefono,
                image: usuario.imagen,
                age: usuario.edad,
                priority: usuario.prioridad,
                problem: usuario.problema,
                promotion: usuario.promocion,
                curp: usuario.curp,
            });

            console.log('Autenticado!');
            return true;
        } else {
            setAuth({
                uid: null,
                checking: false,
                logged: false,
                name: null,
                email: null,
                tel: null,
                image: null,
                age: null,
                priority: null,
                problem: null,
                promotion: null,
                curp: null,
            });

            return false;
        }

    }, [])

    const logout = () => {
        localStorage.removeItem('token');
        setAuth({
            checking: false,
            logged: false,
        });
    }

    return (
        <AuthContext.Provider value = {{
            auth,
            login,
            verificaToken,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    )
 }