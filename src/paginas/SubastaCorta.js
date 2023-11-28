import React from "react";

import MejoresPujas from "../componentes/MejoresPujas";
import {useParams} from "react-router-dom";
import ProductoModal from "../componentes/ProductoModal";
import salaServicios from "../servicios/shared/servicioSala.js";

export default function SubastaCorta(){
    const [subastaInfo, setSubastaInfo] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const {idSala} = useParams();

    const [mostrarModal, setMostrarModal] = React.useState(false);
    const [modalInfo, setModalInfo] = React.useState({});

    const  llamarProducto = (idProducto)=>{
        const elementoSubastaInfo = subastaInfo.elementoSubasta.filter((elementoSubasta)=>elementoSubasta.producto.idProducto===idProducto)[0];
        setModalInfo(elementoSubastaInfo.producto);
        setMostrarModal(true);
    };

    const verificarSala = (resultadoConsulta)=>{
        const elementosSubastaActuales = resultadoConsulta.elementoSubasta.map((elementoSubasta)=>elementoSubasta.producto.idProducto);
        const conjuntoIdProductos = new Set(elementosSubastaActuales);
        resultadoConsulta.subasta.productos.forEach(producto => {
            if(!conjuntoIdProductos.has(producto.idProducto)){
                resultadoConsulta.elementoSubasta.push({
                    producto:producto,
                    pujaMaxima:producto.precio,
                    compradores:[]
                });
            }
        });
        return resultadoConsulta;
    }

    React.useEffect(()=>{
        salaServicios.consultarSalaPorNombre(idSala)
            .then((resultadoConsulta)=>verificarSala(resultadoConsulta))
            .then((resultadoConsulta)=>setSubastaInfo(resultadoConsulta))
            .then(()=>setLoading(false));
    },[]);

    if(loading){
        return(
            <React.Fragment>
                <h1>Cargando...</h1>
            </React.Fragment>
        );
    }

    return(
        <React.Fragment>
            <div>
                <h1>Sala: {idSala}</h1>
                <h1>{subastaInfo.subasta.nombre}</h1>
                <p>Inicia el: {subastaInfo.subasta.fechaInicio}</p>
                <p>Termina el: {subastaInfo.subasta.fechaFin}</p>
                <p>Estado:{subastaInfo.subasta.estado}</p>
                <image></image>
                <p>{subastaInfo.elementoSubasta[0]?.producto.nombre}</p>
                <button type="button" onClick={()=> llamarProducto(subastaInfo.elementoSubasta[0].producto.idProducto)}>Consultar</button>
            </div>

            <MejoresPujas sala={idSala} informacion={subastaInfo.elementoSubasta[0]?.compradores} producto={subastaInfo.elementoSubasta[0]?.producto}/>

            <ProductoModal estado={mostrarModal} cambiarEstado={setMostrarModal}>
                <h1>{modalInfo.nombre}</h1>
                <image></image>
                <p>descripcion: {modalInfo.descripcion}</p>
                <p>categoria: {modalInfo.categoria}</p>
                <p>precio: {modalInfo.precio}</p>
            </ProductoModal>
        </React.Fragment>
    );
};