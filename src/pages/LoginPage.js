import React, { useContext, useState } from 'react';
import { AuthContext } from '../auth/AuthContext';
import Swal from 'sweetalert2';


export const LoginPage = () => {

    const { login  } = useContext( AuthContext);

    const [form, setform] = useState({
        email: 'kike@gmail.com',
        password: '123456',
        /* rememberme: true */
    });


    const onChange = ({ target }) => {
        const { name, value } = target;

        setform({
            ...form,
            [name]: value
        });

    }

    const onSubmit = async(ev) => {
        ev.preventDefault();
        
        const { email , password } = form;
        // llamar el backend 
        const ok = await login( email, password);

        if ( !ok ) {
            Swal.fire('Error', 'Verificar el usuario y contraseña', 'error');
            
        }
    }

    const todoOk = () => {
        return ( form.email.length > 0 && form.password.length > 0) ? true : false;
    }

    return (

        <div className="row g-0">
            <div className="col-lg-7">
                <img class="img-fluid" src="https://i.ibb.co/1snP4R3/Group-94.png" />
            </div>
            <div className="col-lg-5 d-flex flex-column align-items-end min-vh-100">
                <div className="px-lg-5 py-lg-4 p-4 w-100 align-self-center">
                    <h1 className=" mb-4 text-center titulo">Iniciar sección</h1>
                    <form 
                        className="mb-5"
                        onSubmit = { onSubmit}
                    >
                        <div className="mb-4">
                            <label className="form-label">Correo</label>
                            <input 
                                type="email" 
                                name="email" 
                                className="form-control"
                                placeholder="Ingrese su correo"
                                value={ form.email }
                                onChange={ onChange }
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Contraseña</label>
                            <input 
                                type="password" 
                                name="password" 
                                className="form-control"
                                value={ form.password }
                                onChange={ onChange }
                            />

                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-success w-100"
                            disabled={ !todoOk() }
                            >
                                Iniciar sección
                        </button>

                    </form>
                </div>

            </div>
        </div>
    )
}
