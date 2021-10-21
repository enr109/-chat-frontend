import React from 'react';
import imagen from '../assets/login.PNG';

export const LoginPage = () => {
    return (
        <div className="row g-0">
            <div className="col-lg-7">
            {/* <img class="img-fluid Login-component"></img> */}
            <img src="https://i.ibb.co/1snP4R3/Group-94.png" class="img-fluid"  ></img>
            </div>
            <div className="col-lg-5 d-flex flex-column align-items-end min-vh-100">
                <div className="px-lg-5 py-lg-4 p-4 w-100 align-self-center">
                    <h1 className=" mb-4 text-center titulo">Iniciar sección</h1>
                    <form className="mb-5">
                        <div className="mb-4">
                            <label className="form-label">Correo</label>
                            <input type="email" className="form-control" placeholder="Ingrese su correo"></input>
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Contraseña</label>
                            <input type="password" className="form-control"></input>

                        </div>
                        <button type="submit" className="btn btn-success w-100">Iniciar sección</button>

                    </form>
                </div>

            </div>
        </div>
    )
}
