import React from "react";

import salaServicios from "../servicios/shared/servicioSala";
import servicioLocalStorage from "../servicios/web/servicioLocalStorage";
import servicioJwt from "../servicios/security/servicioJwt";

export default function MejoresPujas({sala, informacion:compradoresActuales, producto, onChange}){

    const[mejoresPujas, setMejoresPujas] = React.useState([]);

    const realizarPuja = ()=>{
        const puja = document.getElementById("pujar").value;
        const infoUsuario = servicioJwt.decryptToken(servicioLocalStorage.getValue("token"));
        const comprador = {
            nombre: infoUsuario.nombre,
            correo: infoUsuario.correo
        };
        salaServicios.pujarProducto(sala,comprador.correo,producto.idProducto,puja)
            .then((respuesta)=>console.log(respuesta));
        onChange();
    };

    React.useEffect(()=>{
        const mejoresPujasTemporales = compradoresActuales.slice(0,5).sort((a,b)=>b.second-a.second);
        setMejoresPujas(mejoresPujasTemporales);
          
    },[compradoresActuales]);

    return(
        <React.Fragment>
            <div>
                <input type="number" name="pujar" id="pujar"></input>
                <button type="button" onClick={realizarPuja}>Pujar</button>
            </div>
            <div className="mejoresPujas">
                <ol>
                    {
                        compradoresActuales.map((comprador, index)=>(
                            <li key={index}>
                                <p>Comprador: {comprador.first.nombre}</p>
                                <p>Puja: {comprador.second}</p>
                            </li>
                        ))
                    }
                </ol>

            </div>
        </React.Fragment>
    );

}