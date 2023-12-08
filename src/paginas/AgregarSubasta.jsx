import React from "react";
import Banner from "../componentes/Banner";
import Menu from "../componentes/Menu";
import TablaProductoSubasta from "../componentes/TablaProductoSubasta";
import servicioSubasta from "../servicios/shared/servicioSubasta";

export default function AgregarSubasta() {
    
    const[productosRevisar, setProductosRevisar]= React.useState([]);
    const[loading,setLoading]= React.useState(true);
    const[productosAgregados, setProductosAgregados]= React.useState([]);
    const[subasta, setSubasta]= React.useState({});

   
    React.useEffect(()=>{
        Promise.all([servicioSubasta.consultarProductosNoAgregadosSubastas()])
        .then(([productosActuales])=>{
            setProductosRevisar(productosActuales);
        })
        .then(()=>setLoading(false));
    },[]);

    const cambiarInfoSubasta = (key, value)=>{
        setSubasta({
            ...subasta,
            [key]: value
        });
    }

    const tipoSubasta = (nuevoTipoSubasta) => {
        cambiarInfoSubasta("tipoSubasta",nuevoTipoSubasta);
    };

    if(loading){
        return(
            <React.Fragment>
                <h1>Cargando...</h1>
            </React.Fragment>
        );}

    const agregarSubasta = (event) => {
        event.preventDefault();
        servicioSubasta.crearSubasta({
            ...subasta,
            estado:"PROGRAMADA",
            productos: productosAgregados
        }).then(respuesta => {
            alert("Subasta creada con éxito");
        }).catch(error => {
            alert("Error al crear la subasta");            
        }).finally(()=>{
            setSubasta({});
            setProductosAgregados([]);
        });

    };
    
    return(
        <React.Fragment>
            <Banner/>
            <Menu/>
            <h1>Subasta</h1>
            <form onSubmit={agregarSubasta}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" name="nombre" id="nombre" onChange={(event)=>cambiarInfoSubasta(event.target.id,event.target.value)} required></input>
                </div>
                <div>
                    <label>Inicia el:</label>
                    <input type="datetime-local" name="fechaInicio" id="fechaInicio" onChange={(event)=>cambiarInfoSubasta(event.target.id,event.target.value)} required></input>
                </div>
                <div>
                    <label>Finaliza el:</label>
                    <input type="datetime-local" name="fechaFin" id="fechaFin" onChange={(event)=>cambiarInfoSubasta(event.target.id,event.target.value)} required></input>
                </div>

                <div>
                    <label>Tipo subasta:</label>
                    <input type="radio" checked={subasta.tipoSubasta === "LARGA"} value="Larga" onChange={()=>tipoSubasta("LARGA")} required></input>
                    <label>Larga</label>

                    <input type="radio" checked={subasta.tipoSubasta === "CORTA"}  value="Corta" onChange={()=>tipoSubasta("CORTA")} required></input>
                    <label>Corta</label>
                </div>

                <div>
                    <TablaProductoSubasta elemento={productosRevisar} productos={productosAgregados} agregarProducto={setProductosAgregados}/>
                </div>
                <div>
                    <button type="submit">Crear</button>
                </div>
            </form>
        </React.Fragment>

    );
};