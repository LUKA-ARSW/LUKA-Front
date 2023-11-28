import React from "react";

import salaServicios from "../servicios/shared/servicioSala.js";

export default function MejoresPujas({sala, informacion, producto}){

    const [compradoresActuales, setCompradoresActuales] = React.useState(informacion??[]);

    const realizarPuja = ()=>{
        const puja = document.getElementById("pujar").value;
        const comprador = {
            nombre: "Daniela Ladino",
            correo: "daniela.ladino@gmail.com"
        };
        salaServicios.pujarProducto(sala,comprador.correo,producto.idProducto,puja)
            .then((respuesta)=>console.log(respuesta))
            .then(()=>{
                const compradoresTemp = [...compradoresActuales];
                compradoresTemp.unshift(
                    {
                        first: comprador,
                        second: puja
                    }
                );
                setCompradoresActuales(compradoresTemp);
            });
    };

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