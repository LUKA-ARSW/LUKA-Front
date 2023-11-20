import React from "react";

export default function MejoresPujas({informacion}){
    return(
        <div className="mejoresPujas">
            <ol>
                {
                    informacion.map((comprador, index)=>(
                        <li key={index}>
                            <p>Comprador: {comprador.nombre}</p>
                            <p>Puja: {comprador.puja}</p>
                        </li>
                    ))
                }
            </ol>

        </div>
    );

}