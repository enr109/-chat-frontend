import React, { useState } from 'react'
import { AuthContext } from '../auth/AuthContext';



export const Modaluser = ({ estado, cambiarEstado}) => {


    /* const [show, setShow] = useState(false);

    const hadleModalClose = (e) => {
        setShow(false);
    };

    const hadleModalOpen = () => {
        setShow(true);
    }; */

    return (

        <div>
            {estado &&
                <div className="Overlay">
                <div className="ContenedorModal modal-dialog">

                    <div className="EncabezadoModal">
                        <h3>Contenido</h3>
                        <button onClick={() => cambiarEstado(false)} className="BotonCerrar">x
                        </button>
                    </div>

                    <form>
                        <div className="mb-3">
                            <label for="recipient-name" className="col-form-label">Nombre</label>
                            <input type="text" className="form-control"/>

                        </div>
                    </form>


                </div>
            </div>

            }
        </div>
        
    )
}





