import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import servicioProducto from "@servicios/shared/servicioProducto";
import servicioJwt from "@servicios/security/servicioJwt";
import servicioLocalStorage from "@servicios/web/servicioLocalStorage";

import Catalogo from "@componentes/Catalogo";


export default function MisProductos() {
    const[productos, setProductos]= useState([]);
    const[loading,setLoading]= useState(true);
    
    useEffect(()=>{
        const infoUsuario = servicioJwt.decryptToken(servicioLocalStorage.getValue("token"));
        const vendedor = {
            correo: infoUsuario.correo
        };
        Promise.all([servicioProducto.consultarProductosPorVendedor(vendedor.correo)])
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
            <h1>Mis Productos</h1>
            <Catalogo numItems={3} productos={productos}/>
            <Link to={"/agregar-producto"}>
                <button type="button">Agregar</button>
            </Link>
        </React.Fragment>
    );
};