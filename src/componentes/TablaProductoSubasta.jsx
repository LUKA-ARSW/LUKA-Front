/* eslint-disable no-extra-semi */
import PropTypes from "prop-types";
import React from "react";

import ProductoModal from "@componentes/ProductoModal";
import Paginador from "@componentes/contenedor/Paginador";

import { ReactComponent as SearchIcon } from '@assets/icon/search-lens.svg';

function TablaProductoSubasta({elemento,productos,agregarProducto: setProductos}){

    const [mostrarModal, setMostrarModal] = React.useState(false);   
    const [productosInfo, setProductosInfo] = React.useState(elemento);
    const [productosFiltrados, setProductosFiltrados] = React.useState(productosInfo);

    const filtroRef = React.useRef();

    const agregarProducto = (productoParaAgregar)=>{
        const productosRestante = productosInfo.filter(producto => producto.idProducto!==productoParaAgregar.idProducto && !productos.some(productoAgregado => productoAgregado.idProducto === producto.idProducto));
        setProductos([...productos, productoParaAgregar]);
        setProductosInfo(productosRestante);
        setProductosFiltrados(productosRestante);
      
    };

    const ajustarFiltro = ()=>{
        const filtroActual = filtroRef.current.value ?? "";
        const filtroEnProgreso = productosInfo.filter((producto)=>producto.nombre.includes(filtroActual));
        setProductosFiltrados(filtroEnProgreso);
    };

    return(
        <React.Fragment>
            <div>
                <label>Productos: </label>
                <button type="button" onClick={()=>setMostrarModal(true)}>Agregar</button>
            </div>
            <ul>
                {
                    productos.map((producto)=>{
                        return(
                            <li key={producto.idProducto}>{`${producto.idProducto} ${producto.nombre}`}</li>
                        );
                    })
                }
            </ul>
            <ProductoModal estado={mostrarModal} cambiarEstado={setMostrarModal}>
                <div>
                    <input type="text" ref={filtroRef} placeholder="Buscar..." />
                    <button type="button" onClick={ajustarFiltro}>
                        <SearchIcon />
                    </button>
                </div>
                <Paginador itemsPerPage={3}>
                    {
                        productosFiltrados.map((producto, index)=>(
                            <div key={index}>
                                <p>{producto.idProducto}</p>
                                <p>{producto.nombre}</p>
                                <button type="button" onClick={()=>agregarProducto(producto)}>Agregar</button>
                            </div>
                        ))
                    }
                </Paginador>
            </ProductoModal>
        </React.Fragment>
    );
};

TablaProductoSubasta.propTypes = {
    elemento: PropTypes.array.isRequired,
    productos: PropTypes.array.isRequired,
    agregarProducto: PropTypes.func.isRequired
};

export default TablaProductoSubasta;