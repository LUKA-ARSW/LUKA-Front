/* eslint-disable no-extra-semi */
import PropTypes from "prop-types";

import React, { useCallback, useState } from "react";

import Paginador from "@componentes/contenedor/Paginador";
import ProductoModal from "@componentes/ProductoModal";

function Catalogo({ productos, numItems=3 }) {

    const [mostrarModal, setMostrarModal] = useState(false);
    const [modalInfo, setModalInfo] = useState({});
    const llamarProducto = useCallback((idProducto) => {
        const productoInfo = productos.find((producto) => producto.idProducto === idProducto);
        setModalInfo(productoInfo);
        setMostrarModal(true);
    }, [productos]);

    return (
        <React.Fragment>
            <Paginador itemsPerPage={numItems}>
                {
                    productos.map((elemento, index) => (
                        <div key={index}>
                            <p>Id: {elemento.idProducto}</p>
                            <p>nombre: {elemento.nombre}</p>
                            <p>Precio: {elemento.precio}</p>
                            <image></image>
                            <button type="button" onClick={()=>llamarProducto(elemento.idProducto)} >Consultar</button>
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
        </React.Fragment>
    );

};

Catalogo.propTypes = {
    productos: PropTypes.array.isRequired,
    numItems: PropTypes.number
};

export default Catalogo;