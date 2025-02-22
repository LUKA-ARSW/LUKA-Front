import React from "react";
import CatalogoPaginadorElemento from "./CatalogoPaginadorElemento";
import ProductoModal from "./ProductoModal";

export default function CatalogoPaginador({numItems, elementos}) {

    const [paginaActual, setPaginaActual] = React.useState(1);
    const [elementosFranja, setElementosFranja] = React.useState(elementos.slice(paginaActual-1, paginaActual+numItems-1));

    const [mostrarModal, setMostrarModal] = React.useState(false);
    const [modalInfo, setModalInfo] = React.useState({});

    const  llamarProducto = (idProducto)=>{
        const productoInfo = elementosFranja.filter((producto)=>producto.idProducto===idProducto)[0];
        setModalInfo(productoInfo);
        setMostrarModal(true);
    };

    const  cambiarPaginaArriba = ()=>{
        if(Math.ceil(elementos.length/numItems) < paginaActual+1){ return; }
        const paginaSiguiente= paginaActual+1;
        setPaginaActual(paginaSiguiente);
        setElementosFranja(elementos.slice((paginaSiguiente-1)*numItems, (paginaSiguiente)*numItems));

    }

    const  cambiarPaginaAbajo = ()=>{
        if(paginaActual <= 1){ return; }
        const paginaAnterior= paginaActual-1;
        setPaginaActual(paginaAnterior);
        setElementosFranja(elementos.slice((paginaAnterior-1)*numItems, (paginaAnterior)*numItems));
    }

    return(
        <React.Fragment>
            <div className="contenidoPaginador">
                {elementosFranja.map((producto)=>
                    <CatalogoPaginadorElemento elemento={producto} accionConsulta={llamarProducto}/>
                )}

            </div>

            <div className="controladorDePagina">
                <button type="button" onClick={cambiarPaginaAbajo}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z"/>
                    </svg>
                </button>

                <label>{paginaActual}</label>

                <button type="button" onClick={cambiarPaginaArriba}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z"/>
                    </svg>
                </button>
            </div>

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