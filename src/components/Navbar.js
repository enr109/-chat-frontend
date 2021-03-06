import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'

export const Navbar = () => {

    const { auth, logout } = useContext( AuthContext);
    return (
        <nav className="navbar navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={ auth.image} alt="" width="50" height="50" class="d-inline-block align-text-top navimg"/>
                             { auth.name }
                        </a>

                        <button className="btn text-danger"
                                onClick={ logout }>
                            Salir
                        </button>
                    </div>
        </nav>
    )
}
