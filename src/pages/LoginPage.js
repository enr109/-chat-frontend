import React from 'react';

export const LoginPage = () => {
    return (
        <form className="form-horizontal form-material"
        autoComplete="off">
            <h3 className="text-center">Iniciar Seccion</h3>
                  
            <div className="form-group m-t-40">
                <div className="col-xs-12">
                    <label className="form-label"> Correo </label>
                    <input className="form-control" 
                           type="email"></input>
                </div>
            </div>

            <div className="form-group">
                <div className="col-xs-12">
                <label className="form-label"> Contraseña </label>
                    <input className="form-control" 
                           type="password"></input>
                </div>
            </div>
            
            <div class="form-group text-center m-t-20">
                <div class="col-xs-12">
                    <button class="btn btn-info btn-lg btn-block  btn-rounded" type="submit">Log In</button>
                </div>
            </div>

        </form>
    )
}
