import React from "react";

import ProductoModal from "./ProductoModal";
import CatalogoPaginador from "./CatalogoPaginador";
import ProductosSubastaPaginador from "./ProductosSubastaPaginador";

const productosMock = [
    {
        id:"ProLuka01",
        nombre:"Anillo de esmeralda",
        foto:"",
        descripcion: "Anillo lindo",
        precio: 800,
        categoria: "JOYAS"    

    }, 
    {
        id:"ProLuka02",
        nombre:"El sueño",
        foto:"",
        descripcion: "Anillo lindo",
        precio: 900,
        categoria: "JOYAS"   

    },

    {
        id:"ProLuka03",
        nombre:"Carro antiguo",
        foto:"",
        descripcion: "Anillo lindo",
        precio: 1000000,
        categoria: "JOYAS"

    },

    {
        id:"ProLuka04",
        nombre:"Ropa de peliculas",
        foto:"",
        descripcion: "Anillo lindo",
        precio: 598700,
        categoria: "JOYAS"

    },

    {
        id:"ProLuka05",
        nombre:"La primera palabra",
        foto:"",
        descripcion: "Anillo lindo",
        precio: 966,
        categoria: "JOYAS"
    }
];

export default function TablaProductoSubasta(){

    const [mostrarModal, setMostrarModal] = React.useState(false);
    const [productos, setProductos] = React.useState([]);
    const [productosInfo, setProductosInfo] = React.useState(productosMock);
    const [productosFiltrados, setProductosFiltrados] = React.useState(productosInfo);

    const filtroRef = React.useRef();

    const agregarProducto = (producto)=>{
        setProductos([...productos, producto]);
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
                            <li>
                                {producto.id}
                                {producto.nombre}
                            </li>
                        );
                    })
                }
            </ul>
            <ProductoModal estado={mostrarModal} cambiarEstado={setMostrarModal}>
                <div>
                    <input type="text" ref={filtroRef} placeholder="Buscar..." />
                    <button type="button" onClick={ajustarFiltro}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </button>
                </div>
                <ProductosSubastaPaginador numItems={2} infoProductos={productosFiltrados} agregar={agregarProducto}/>
            </ProductoModal>
        </React.Fragment>


    );
};