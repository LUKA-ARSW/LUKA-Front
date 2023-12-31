/* eslint-disable no-extra-semi */
import React, { useState, useEffect } from "react";

import servicioProducto from "../servicios/shared/servicioProducto";
import Catalogo from "./Catalogo";

export default function Productos() {
    const [ productos, setProductos ]= useState([]);
    const [ loading, setLoading ]= useState(true);
    
    useEffect(()=>{
        Promise.all([servicioProducto.consultarTodosProductos()])
            .then(([productosActuales])=>setProductos(productosActuales))
            .then(()=>setLoading(false));
    },[]);

    if(loading){
        return(
            <React.Fragment>
                <h1>Cargando...</h1>
            </React.Fragment>
        );}

    return(
        <React.Fragment>
            <h1>Productos</h1>
            <Catalogo productos={productos}/>
        </React.Fragment>
    );
};