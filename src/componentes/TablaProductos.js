import React from "react";
import ProductoModal from "../componentes/ProductoModal";

const productosMock = {
    "anillo01":{
        nombre:"Anillo de esmeralda",
        foto:"",
        descripcion: "Anillo lindo",
        precio: 800,
        categoria: "JOYAS"

    }, 
    "elSueño01":{
        nombre:"El sueño",
        foto:"",
        descripcion: "cuadro lindo",
        precio: 900,
        categoria: "ARTE"

    }

};

export default function TablaProductos({productos}){
    const [mostrarModal, setMostrarModal] = React.useState(false);
    const [modalInfo, setModalInfo] = React.useState({});

    if(!productos){
        return (
            <p>Cargando productos</p>
        );
    }

    const  llamarProducto = (idProducto)=>{
        const productoInfo = productosMock[idProducto];
        setModalInfo(productoInfo);
        setMostrarModal(true);
    };

    return (
        <React.Fragment>
            <ul>            
                {
                    productos.map((producto)=>{
                        return (
                            <li>
                                {producto.nombre}
                                <button type="button" onClick={()=>llamarProducto(producto.id)}>Consultar</button>
                            </li>                    

                        );
                    })
                }
            </ul>
            <ProductoModal estado={mostrarModal} cambiarEstado={setMostrarModal}>
                <h1>{modalInfo.nombre}</h1>
                <image></image>
                <p>descripcion: {modalInfo.descripcion}</p>
                <p>categoria: {modalInfo.categoria}</p>
                <p>precio: {modalInfo.precio}</p>
            </ProductoModal>
        </React.Fragment>

    );

}