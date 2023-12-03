import React from "react";

import BannerSencillo from "../componentes/BannerSencillo";
import tipoDoc from "../util/TipoDocumento";

export default function Usuario(){
    const [usuario, setUsuario] = React.useState({});
    const [contrasena, setContrasena] = React.useState("");
    const [confirmarContrasena, setConfirmarContrasena] = React.useState("");

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const validarContrasena = (event) => {
        const contrasena = event.target.value;
        if (regex.test(contrasena)) {
            setContrasena(contrasena);
        } else {
            alert("La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales.");
        }
    }

    const validarConfirmacionContrasena = (event) => {
        setConfirmarContrasena(event.target.value);
    }

    function validarIgualdadContrasena(event){
        if(contrasena !== confirmarContrasena){
            alert("Las contraseñas no coinciden");
            event.preventDefault();
            return false;
        }
        return true;
    }

    const cambiarInfoUsuario = (key, value)=>{
        setUsuario({
            ...usuario,
            [key]: value
        });
    }

    return(
        <React.Fragment>
            <BannerSencillo/>
            <h1>Haz parte de LUKA!</h1>
            <form onSubmit={validarIgualdadContrasena}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" name="nombre" id="nombre" required></input>
                </div>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" id="username" required></input>
                </div>
                <div>
                    <label>Correo:</label>
                    <input type="email" name="correo" id="correo" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}" required></input>
                </div>
                <div>
                    <label>Tipo de documento:</label>
                    <select name="tipoDocumento" id="tipoDocumento" required>
                        <option value="">Seleccione un tipo</option>
                        {tipoDoc.map((tipoDoc) => (
                            <option key={tipoDoc} value={tipoDoc}>{tipoDoc}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Numero de documento:</label>
                    <input type="text" name="numeroDocumento" id="numeroDocumento" required></input>                    
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input type="password" name="contrasena" id="contrasena" value={contrasena} onChange={validarContrasena} required></input>
                </div>
                <div>
                    <label>Confirmar contraseña:</label>
                    <input type="password" name="confirmarContrasena" id="confirmarContrasena" value={confirmarContrasena} onChange={validarConfirmacionContrasena} required></input>
                </div>
                <div>
                    <label>Deseas ser:</label>
                    <input type="radio" checked={usuario.tipoUsuario === "comprador"} value="comprador" onChange={()=>cambiarInfoUsuario("tipoUsuario", "comprador")} required></input>
                    <label>Comprador</label>

                    <input type="radio" checked={usuario.tipoUsuario === "vendedor"}  value="vendedor" onChange={()=>cambiarInfoUsuario("tipoUsuario", "vendedor")} required></input>
                    <label>Vendedor</label>

                    <input type="radio" checked={usuario.tipoUsuario === "ambos"}  value="ambos" onChange={()=>cambiarInfoUsuario("tipoUsuario", "ambos")} required></input>
                    <label>Ambos</label>
                </div>
                
                <button type="submit">INSCRIBIRSE</button>
                </form>
      </React.Fragment>    
    );
}