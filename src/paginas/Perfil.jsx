import React from "react";

import Banner from "../componentes/Banner";
import Menu from "../componentes/Menu";
import tipoDoc from "../util/TipoDocumento";
import servicioLocalStorage from "../servicios/web/servicioLocalStorage";
import servicioJwt from "../servicios/security/servicioJwt";

export default function Perfil(correo){
    const [edicion, setEdicion] = React.useState(false);
    const [usuario, setUsuario] = React.useState({});
    
    const perfil = (e) => {};

    const cambiarInfoUsuario = (key, value)=>{
        setUsuario({
            ...usuario,
            [key]: value
        });
    }

    React.useEffect(() => {
        const infoUsuario = servicioJwt.decryptToken(servicioLocalStorage.getValue("token"));
        setUsuario ({
            nombre: infoUsuario.nombre,
            nombreUsuario: infoUsuario.nombreUsuario,
            correo: infoUsuario.correo,
            tipoDocumento: infoUsuario.tipoDocumento,
            documento: infoUsuario.numDocumento,
            tipoUsuario: infoUsuario.rol,
            numeroCuenta: infoUsuario.numeroCuenta
        });
    }, []);


    return(
        <React.Fragment>
            <Banner/>
            <Menu/>
            <h1>{usuario.nombreUsuario}</h1>
            <form onSubmit={perfil}>
                <h2>Información personal</h2>
                <div className="info-personal">
                    <div>
                        <label>Nombre:</label>
                        <input type="text" id="nombre" value={usuario.nombre} disabled={edicion} required ></input>
                    </div>
                    <div>
                        <label >Username: {usuario.nombreUsuario}</label>
                        </div>
                    <div>
                        <label>Correo: {usuario.correo}</label>
                        </div>
                    <div>
                        <label>Tipo de documento:</label>
                        <select name="tipoDocumento" id="tipoDocumento" required>
                                {tipoDoc.map((tipoDoc) => (
                                    <option key={tipoDoc} value={tipoDoc} selected={tipoDoc === usuario.tipoDocumento}>{tipoDoc}</option>
                                ))}
                        </select>
                    </div>
                    <div>
                        <label>Número de documento:</label>
                        <input type="text" id="numero-documento" value={usuario.numDocumento} disabled={edicion} required></input>
                    </div>
                    <div>
                        <label>Deseas ser:</label>
                        <input type="radio" checked={usuario.tipoUsuario === "comprador"} value="comprador" onChange={()=>cambiarInfoUsuario("tipoUsuario", "comprador")} disabled={edicion} required></input>
                        <label>Comprador</label>

                        <input type="radio" checked={usuario.tipoUsuario === "vendedor"}  value="vendedor" onChange={()=>cambiarInfoUsuario("tipoUsuario", "vendedor")} disabled={edicion} required></input>
                        <label>Vendedor</label>

                        <input type="radio" checked={usuario.tipoUsuario === "ambos"}  value="ambos" onChange={()=>cambiarInfoUsuario("tipoUsuario", "ambos")} disabled={edicion} required></input>
                        <label>Ambos</label>
                    </div>
                </div>
                <h2>Información bancaria</h2>
                <div className="info-bancaria">
                    <label>Número de cuenta:</label>
                    <input type="text" id="numero-cuenta" value={usuario.numeroCuenta} disabled={edicion} required></input>
                </div>
                <button type="button" onClick={()=>setEdicion(!edicion)}>Editar</button>
                <button type="submit" disabled={edicion}>Guardar</button>
            </form>
        </React.Fragment>
    );
}