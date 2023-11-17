import React from "react";

import ProductoModal from "./ProductoModal";


export default function TablaProductoSubasta(){

    const [mostrarModal, setMostrarModal] = React.useState(false);
    const [modalInfo, setModalInfo] = React.useState({});
    const [productos, setProductos] = React.useState([]);

    const agregarProducto = (producto)=>{
        setProductos([...productos, producto]);
    };

    return(
        <React.Fragment>
            <div>
                <label>Productos: </label>
                <button type="button">Agregar</button>
            </div>
            <ul>
                {
                    productos.map((producto)=>{
                        return(
                            <li>
                                {producto.id}
                                {producto.nombre}
                            </li>
                        );
                    })
                }
            </ul>
            <ProductoModal estado={mostrarModal} cambiarEstado={setMostrarModal}>
                {/*Aqui va el codigo del buscador de productos*/}
                
            </ProductoModal>
        </React.Fragment>


    );
};