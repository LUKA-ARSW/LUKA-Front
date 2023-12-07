import React from "react";

import BannerSencillo from "../componentes/BannerSencillo";
import tipoDoc from "../util/TipoDocumento";
import servicioUsuario from "../servicios/shared/servicioUsuario";
import { error } from "console";
import { useNavigate } from "react-router";

export default function Usuario(){
    const [usuario, setUsuario] = React.useState({});
    const [contrasena, setContrasena] = React.useState("");
    const [confirmarContrasena, setConfirmarContrasena] = React.useState(false);
    const navegacion = useNavigate();

    const regex = /^[\w#\-_@!]{8,}$/;    

    const validarContrasena = (event) => {
        const contrasena = event.target.value;
        if (regex.test(contrasena)) {
            setContrasena(contrasena);
        } else {
            alert("La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales.");
        }
    }

    const validarConfirmacionContrasena = (event) => {
        const confirmarContrasena = event.target.value;
        const igualdad=confirmarContrasena===contrasena;
        setConfirmarContrasena(igualdad);
        if(igualdad===false){
            alert("Las contraseñas no coinciden");
        }

    }

    const cambiarInfoUsuario = (key, value)=>{
        setUsuario({
            ...usuario,
            [key]: value
        });
    }

    const crearNuevoUsuario = (event) => {

        event.preventDefault();       
        if(confirmarContrasena){
            servicioUsuario.crearUsuario({
                ...usuario, 
                contrasena: contrasena
            }).then(respuesta => {
                alert("Usuario creado con éxito");
                navegacion("/login");

            }).catch(error => {                
                setUsuario({});
                setContrasena("");            
            });
        }

        
    }

    return(
        <React.Fragment>
            <BannerSencillo/>
            <h1>Haz parte de LUKA!</h1>
            <form onSubmit={crearNuevoUsuario}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" name="nombre" id="nombre"  onChange={(event)=>cambiarInfoUsuario(event.target.id,event.target.value)} required></input>
                </div>
                <div>
                    <label>Username:</label>
                    <input type="text" name="nombreUsuario" id="nombreUsuario" onChange={(event)=>cambiarInfoUsuario(event.target.id,event.target.value)} required></input>
                </div>
                <div>
                    <label>Correo:</label>
                    <input type="email" name="correo" id="correo" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}" onChange={(event)=>cambiarInfoUsuario(event.target.id,event.target.value)} required></input>
                </div>
                <div>
                    <label>Tipo de documento:</label>
                    <select name="tipoDocumento" id="tipoDocumento" onChange={(event)=>cambiarInfoUsuario(event.target.id,event.target.value)} required>
                        <option value="">Seleccione un tipo</option>
                        {tipoDoc.map((tipoDoc) => (
                            <option key={tipoDoc} value={tipoDoc}>{tipoDoc}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Numero de documento:</label>
                    <input type="text" name="numDocumento" id="numDocumento" onChange={(event)=>cambiarInfoUsuario(event.target.id,event.target.value)} required></input>                    
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input type="password" name="contrasena" id="contrasena" value={contrasena} onBlur={validarContrasena} onChange={(event)=>setContrasena(event.target.value)} required></input>
                </div>
                <div>
                    <label>Confirmar contraseña:</label>
                    <input type="password" name="confirmarContrasena" id="confirmarContrasena" onBlur={validarConfirmacionContrasena} required></input>
                </div>
                <div>
                    <label>Deseas ser:</label>
                    <input type="radio" checked={usuario.rol === "COMPRADOR"} value="comprador" onChange={()=>cambiarInfoUsuario("rol", "COMPRADOR")} required></input>
                    <label>Comprador</label>

                    <input type="radio" checked={usuario.rol === "VENDEDOR"}  value="vendedor" onChange={()=>cambiarInfoUsuario("rol", "VENDEDOR")} required></input>
                    <label>Vendedor</label>

                    <input type="radio" checked={usuario.rol === "AMBOS"}  value="ambos" onChange={()=>cambiarInfoUsuario("rol", "AMBOS")} required></input>
                    <label>Ambos</label>
                </div>
                
                <button type="submit">INSCRIBIRSE</button>
                </form>
      </React.Fragment>    
    );
}