import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../img/LogoLUKA.png";
import BannerSencillo from "../componentes/BannerSencillo";
import servicioUsuario from "../servicios/shared/servicioUsuario";
import servicioLocalStorage from "../servicios/web/servicioLocalStorage";
import servicioAutenticacion from "../servicios/security/servicioAutenticacion";

export default function Login() {

    const navegacion = useNavigate();

    const login = (event) => {
        event.preventDefault();
        
        if (document.getElementById("correo").value === "" || document.getElementById("contrasena").value === "") {
            alert("Por favor ingrese todos los datos");
            return;
        }

        const usuario = {
            correo: document.getElementById("correo").value,
            contrasena: document.getElementById("contrasena").value
        };

        servicioUsuario.login(usuario)
            .then((respuesta) => {
               servicioLocalStorage.setValue("token", respuesta);
            })
            .then(() => {
                if (!servicioAutenticacion.usuarioAutenticado()) {
                    throw new Error("No se pudo autenticar el usuario");
                }
                navegacion("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        if (servicioAutenticacion.usuarioAutenticado()) {
            navegacion("/");
        }
    }, []);

    return (
        <React.Fragment>
            <BannerSencillo/>
            <form>
                <img className="logo" src ={logo} alt="Logo" />
                <div>
                    <label>Correo:</label>
                    <input type="email" name="correo" id="correo" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}" required></input>
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input type="password" name="contrasena" id="contrasena" required></input>
                </div>
                <div>
                        <button type="submit" onClick={login}>Login</button>
                </div>
            </form>
            <div>
                <a href="#">¿Has olvidado la contraseña?</a>
            </div>
            <div>
                <Link to={"/crear-usuario"}>
                    <button type="button">Crear cuenta</button>
                </Link>
            </div>
        </React.Fragment>
    );
}