import React from "react";
import { Link, useNavigate} from "react-router-dom";
import servicioUsuario from "../servicios/shared/servicioUsuario";
import servicioLocalStorage from "../servicios/web/servicioLocalStorage";
import "../style/cerrarSesion.css";

export default function MenuPerfil() {

    const navegacion = useNavigate();

    const cerrarSesion = () => {
        servicioUsuario.cerrarSesion();
        servicioLocalStorage.removeValue("token");
        navegacion("/login");
    };

        return (
            <div>
                <Link to={`/perfil`}>
                    <li>Mi perfil</li>
                </Link>
                <li className="cerrarSesion" onClick={cerrarSesion}>Cerrar sesión</li>                
            </div>
        );
}