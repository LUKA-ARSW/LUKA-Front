/* eslint-disable no-extra-semi */
import PropTypes from "prop-types";

import React, { useState } from "react";

import ProductoModal from "./ProductoModal";
import PujarModal from "./PujarModal";
import salaServicio from "@servicios/shared/servicioSala";
import servicioJwt from "@servicios/security/servicioJwt";
import servicioLocalStorage from "@servicios/web/servicioLocalStorage";

import Paginador from "@componentes/contenedor/Paginador";

function SubastaProductos({numItems, elementos:itemsGenerales, nombreSala, onChange}) {

    const [mostrarModal, setMostrarModal] = useState(false);
    const [modalInfo, setModalInfo] = useState({});

    const [mostrarModalPujar, setMostrarModalPujar] = useState(false);
    const [modalPujarInfo, setModalPujarInfo] = useState("");

    const accionConsulta = (idProducto) => {
        const elementoSubastaInfo = itemsGenerales.find((elementoSubasta)=>elementoSubasta.producto.idProducto===idProducto);
        setModalInfo(elementoSubastaInfo.producto);
        setMostrarModal(true);
    };

    const accionPujar = (idProducto) => {
        setModalPujarInfo(idProducto);
        setMostrarModalPujar(true);
    };

    const realizarPuja = () => {
        const puja = document.getElementById("pujar").value;
        const infoUsuario = servicioJwt.decryptToken(servicioLocalStorage.getValue("token"));
        const comprador = {
            nombre: infoUsuario.nombre,
            correo: infoUsuario.correo
        };
        salaServicio.pujarProducto(nombreSala,comprador.correo,modalPujarInfo,puja)
            .then((respuesta)=>console.log(respuesta))
            .then(()=>setMostrarModalPujar(false))
            .then(()=>setModalPujarInfo(""));
        onChange();
    }

    return(
        <React.Fragment>
            <Paginador itemsPerPage={numItems}>
                {
                    itemsGenerales.map((elementoSubasta, index) => (
                        <div key={index}>
                            <h1>{elementoSubasta.producto.nombre}</h1>
                            <button onClick={()=>accionConsulta(elementoSubasta.producto.idProducto)}>Consultar</button>
                            <button onClick={()=>accionPujar(elementoSubasta.producto.idProducto)}>Pujar</button>
                            <p>{elementoSubasta.compradores[0]?.first.nombre??"No hay pujas aun"}</p>
                            <p>{elementoSubasta.pujaMaxima}</p>
                        </div>
                    ))
                }
            </Paginador>
            <ProductoModal estado={mostrarModal} cambiarEstado={setMostrarModal}>
                <h1>{modalInfo.nombre}</h1>
                <image></image>
                <p>descripcion: {modalInfo.descripcion}</p>
                <p>categoria: {modalInfo.categoria}</p>
                <p>precio: {modalInfo.precio}</p>
            </ProductoModal>

            <PujarModal estado={mostrarModalPujar} cambiarEstado={setMostrarModalPujar}>
                <h1>¿Cuánto desea pujar?</h1>
                <input type="number" name="pujar" id="pujar"></input>
                <button type="button" onClick={realizarPuja}>Pujar</button>
            </PujarModal>
        </React.Fragment>

        
    );

};

SubastaProductos.propTypes = {
    numItems: PropTypes.number.isRequired,
    elementos: PropTypes.array.isRequired,
    nombreSala: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default SubastaProductos;