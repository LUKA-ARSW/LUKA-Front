import React from "react";
import { Link } from "react-router-dom";

import logo from "../img/LogoLUKA.png";
import BannerSencillo from "../componentes/BannerSencillo";

export default function Login() {

    const login = (e) => {};

    return (
        <React.Fragment>
            <BannerSencillo/>
            <form onSubmit={login}>
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
                    <button type="submit"><Link to={"/"}>Login</Link></button>
                </div>
                <div>
                    <a href="#">¿Has olvidado la contraseña?</a>
                </div>
                <div>
                    <Link to={"/crear-usuario"}>
                        <button type="button">Crear cuenta</button>
                    </Link>
                </div>
            </form>
        </React.Fragment>
    );
}