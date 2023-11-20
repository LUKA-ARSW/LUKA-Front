import React from "react";

import MejoresPujas from "../componentes/MejoresPujas";
import {useParams} from "react-router-dom";
import ProductoModal from "../componentes/ProductoModal";

const informacionSubasta = {
    id:"SubLuka02",
    nombre:"Subasta BRONZE",
    fechaInicio:"25-11-2023 08:00",
    fechaFin:"25-11-2023 20:00",
    estado:"ACTIVA",
    elementosSubasta:[
        {
            producto:{
                id:"ProLuka01",
                nombre:"Anillo de esmeralda",
                foto:"",
                descripcion: "Anillo lindo",
                precio: 800,
                categoria: "JOYAS"    

            },
            pujaMaxima:1000,
            compradores:[
                {
                    nombre:"Daniela",
                    puja:1000
                },
                {
                    nombre:"Eduard",
                    puja:950
                },
                {
                    nombre:"Luisa",
                    puja:800
                }                
            ] 
        }
    ]
};

export default function SubastaCorta(){
    const [subastaInfo, setSubastaInfo] = React.useState(informacionSubasta);
    const {idSubasta} = useParams();

    const [mostrarModal, setMostrarModal] = React.useState(false);
    const [modalInfo, setModalInfo] = React.useState({});

    const  llamarProducto = (idProducto)=>{
        const elementoSubastaInfo = subastaInfo.elementosSubasta.filter((elementoSubasta)=>elementoSubasta.producto.id===idProducto)[0];
        setModalInfo(elementoSubastaInfo.producto);
        setMostrarModal(true);
    };

    return(
        <React.Fragment>
            <div>
                <h1>Subasta id: {idSubasta}</h1>
                <h1>{subastaInfo.nombre}</h1>
                <p>Inicia el: {subastaInfo.fechaInicio}</p>
                <p>Termina el: {subastaInfo.fechaFin}</p>
                <p>Estado:{subastaInfo.estado}</p>
                <image></image>
                <p>{subastaInfo.elementosSubasta[0].producto.nombre}</p>
                <button type="button" onClick={()=> llamarProducto(subastaInfo.elementosSubasta[0].producto.id)}>Consultar</button>
            </div>
            <div>
                <input type="text" name="pujar" id="pujar"></input>
                <button type="button">Pujar</button>
            </div>
            <MejoresPujas informacion={subastaInfo.elementosSubasta[0].compradores}/>

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