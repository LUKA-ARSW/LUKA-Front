import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "@img/LogoLUKA.png";
import BannerSencillo from "@componentes/BannerSencillo";
import servicioUsuario from "@servicios/shared/servicioUsuario";
import useAuth from "@hooks/useAuth";
import useLocalStorage from "@hooks/useLocalStorage";

export default function Login() {

    const navegacion = useNavigate();
    const { isAuthenticated: currentlyAuthenticated } = useAuth();
    const { changeValue: setToken } = useLocalStorage("token", "");
    const [ isAuthenticated, setIsAuthenticated ] = useState(currentlyAuthenticated);

    const login = (event) => {
        event.preventDefault();

        const email = document.getElementById("correo").value;
        const password = document.getElementById("contrasena").value;
        
        if (email === "" || password === "") {
            alert("Por favor ingrese todos los datos");
            return;
        }

        servicioUsuario.login({
            correo: email, 
            contrasena: password
        })
        .then((respuesta) => {
            setToken(respuesta);
            setIsAuthenticated(true);
        })
        .catch((error) => {
            console.warn(error);
        });
    };

    useEffect(() => {
        if (isAuthenticated) { navegacion("/"); }
    }, [isAuthenticated, navegacion]);

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