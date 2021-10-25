import React ,{ useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

export const Rightuser = () => {
    const { auth } = useContext( AuthContext);
    return (
        <div className="col-lg-2 d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block">
            <img src={ auth.image } alt="" width="170" height="170" className="imagen"/>
            <div className="text-center">
                <p className="card-text nombre">{ auth.name }</p>
                <p className="card-text tel">{ auth.tel }</p>
            </div>
            <div className="div1">
                <p className="nombre card-text">Datos del contacto</p>
            </div>
            <div>
                <label class="form-label">Edad</label>
                <p className="contl">{ auth.age }</p>
                <label class="form-label">Correo</label>
                <p className="contl">{ auth.email }</p>
                <label class="form-label">Prioridad</label>
                <p className="contl">{ auth.priority }</p>
                <label class="form-label">Problemas</label>
                <p className="contl">{ auth.problem }</p>
                <label class="form-label ">Promocion</label>
                <p className="contl">{ auth.promotion }</p>
                <label class="form-label ">CURP</label>
                <p className="contl">{ auth.curp }</p>

            </div>
        </div>
    )
}
