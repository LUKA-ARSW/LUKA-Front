import React from "react";
import { Link } from "react-router-dom";

import  TablaProductos from "../componentes/TablaProductos";
import Banner from "../componentes/Banner";
import Menu from "../componentes/Menu";


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
        <React.Fragment>
            <Banner/>
            <Menu/>
            <div>
                <Link to={"/mis-subastas"}>
                    <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                            </svg>
                    </button>
                </Link>
            </div>
            <div className="subastaInfo">
                <h1>{nombre}</h1>
                <p>Inicia el: {subasta.FechaInicio}</p>
                <p>Termina el: {subasta.FechaFin}</p>
                <TablaProductos productos={subasta.productos}/>
            </div>
        </React.Fragment>
    );

}