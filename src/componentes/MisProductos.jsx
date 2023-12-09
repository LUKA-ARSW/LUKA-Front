import React from "react";
import { Link } from "react-router-dom";

import CatalogoPaginador from "./CatalogoPaginador";
import servicioProducto from "../servicios/shared/servicioProducto";
import servicioJwt from "../servicios/security/servicioJwt";
import servicioLocalStorage from "../servicios/web/servicioLocalStorage";

export default function MisProductos() {
    const[productos, setProductos]= React.useState([]);
    const[loading,setLoading]= React.useState(true);
    
    React.useEffect(()=>{
        const infoUsuario = servicioJwt.decryptToken(servicioLocalStorage.getValue("token"));
        const vendedor = {
            correo: infoUsuario.correo
        };
        Promise.all([servicioProducto.consultarProductosPorVendedor(vendedor.correo)])
        .then(([productosActuales])=>{
            setProductos(productosActuales);
        })
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
            <div className="paginador">
                <CatalogoPaginador numItems={3} elementos={productos}/>
            </div>
            <div>
                <Link to={"/agregar-producto"}>
                    <button type="button">Agregar</button>
                </Link>
            </div>
        </React.Fragment>
    );
};