import React from "react";

import SubastaPaginador from "../componentes/SubastaPaginador";
import { useParams } from "react-router-dom";
import salaServicios from "../servicios/shared/servicioSala";

export default function SubastaLarga() {
    const [subastaInfo, setSubastaInfo] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const {idSala} = useParams();

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
        const inicializar = ()=>{
            salaServicios.consultarSalaPorNombre(idSala)
                .then((resultadoConsulta)=>{
                    console.log(resultadoConsulta);
                    return resultadoConsulta;
                })
                .then((resultadoConsulta)=>verificarSala(resultadoConsulta))
                .then((resultadoConsulta)=>setSubastaInfo(resultadoConsulta))
                .then(()=>setLoading(false));
        };
        inicializar();

        
        const idIntervalo = setInterval(()=>{
            inicializar();
        },
        5000);
        return ()=>clearInterval(idIntervalo);
                             
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
            <h1>Subasta id: {idSala}</h1>
            <h1>{subastaInfo.subasta.nombre}</h1>
            <p>Inicia el: {subastaInfo.subasta.fechaInicio}</p>
            <p>Termina el: {subastaInfo.subasta.fechaFin}</p>
            <p>Estado:{subastaInfo.subasta.estado}</p>
            <h1>Productos:</h1>
            <SubastaPaginador numItems={3} elementos={subastaInfo.elementoSubasta} nombreSala={idSala}/>
        </React.Fragment>
    );

};