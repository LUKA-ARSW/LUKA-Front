import React from "react";
import  TablaProductos from "../componentes/TablaProductos";


const subastas = {
    "Subasta01":{
        FechaInicio:"05-11-2023 14:00",
        FechaFin:"08-11-2023 14:00",
        productos:[
            {
                id:"anillo01",
                nombre:"Anillo de esmeralda"
            },
            {
                id:"elSueño01",
                nombre:"El sueño"
            }
        ]
    }
};



export default function SubastaInfo({nombre}) {
    const [subasta, setSubasta] = React.useState({});
  

    React.useEffect(()=>{
        const subastaInfo = subastas[nombre];
        setSubasta(subastaInfo);
    },[nombre]);

    return(
        <div className="subastaInfo">
            <h1>{nombre}</h1>
            <p>Inicia el: {subasta.FechaInicio}</p>
            <p>Termina el: {subasta.FechaFin}</p>
            <TablaProductos productos={subasta.productos}/>
        </div>

    );

}