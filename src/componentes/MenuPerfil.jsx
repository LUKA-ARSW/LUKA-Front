import React from "react";
import { Link } from "react-router-dom";

export default function MenuPerfil() {

        return (
            <div>
                <Link to={`/perfil`}>
                    <li>Mi perfil</li>
                </Link>
                <Link to={`/cerrar-sesion`}>
                    <li>Cerrar sesión</li>
                </Link>
            </div>
        );
}