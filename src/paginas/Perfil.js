import React from "react";

import Banner from "../componentes/Banner";
import Menu from "../componentes/Menu";


const tipoDoc = [
    "CC",
    "CE",
    "PASAPORTE"
];

const usuario = {
    nombre: "Luisa Daniela Bermudez Ladino",
    nombreUsuario: "Luisa-Daniela",
    correo: "luisa.daniela@gmail.com",
    tipoDocumento: "CC",
    documento: "1234567890",
    tipoUsuario: "comprador",
    numeroCuenta: "1234567890"
};


export default function Perfil(correo){
    const [nombre, setNombre] = React.useState(usuario.nombre);
    const [tipoU, setTipoUsuario] = React.useState("comprador");
    const [numeroCuenta, setNumeroCuenta] = React.useState(usuario.numeroCuenta);
    const [documento, setDocumento] = React.useState(usuario.documento);
    

    const tipoUsuario = (nuevoTipoUsuario) => {
        setTipoUsuario(nuevoTipoUsuario);
    }

    const perfil = (e) => {};


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
                        <input type="text" id="nombre" value={nombre} onChange={(nombre) => setNombre(nombre.target.value)} required></input>
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
                                <option value="">Seleccione un tipo</option>
                                {tipoDoc.map((tipoDoc) => (
                                    <option value={tipoDoc}>{tipoDoc}</option>
                                ))}
                        </select>
                    </div>
                    <div>
                        <label>Número de documento:</label>
                        <input type="text" id="numero-documento" value={documento} onChange={(documento)=> setDocumento(documento.target.value)} required></input>
                    </div>
                    <div>
                        <label>Deseas ser:</label>
                        <input type="radio" checked={tipoU === "comprador"} value="comprador" onChange={()=>tipoUsuario("comprador")} required></input>
                        <label>Comprador</label>

                        <input type="radio" checked={tipoU === "vendedor"}  value="vendedor" onChange={()=>tipoUsuario("vendedor")} required></input>
                        <label>Vendedor</label>

                        <input type="radio" checked={tipoU === "ambos"}  value="ambos" onChange={()=>tipoUsuario("ambos")} required></input>
                        <label>Ambos</label>
                    </div>
                </div>
                <h2>Información bancaria</h2>
                <div className="info-bancaria">
                    <label>Número de cuenta:</label>
                    <input type="text" id="numero-cuenta" value={numeroCuenta} onChange={(numeroCuenta) => setNumeroCuenta(numeroCuenta.target.value)}></input>
                </div>
                <button type="submit">Guardar</button>
            </form>
        </React.Fragment>
    );
}