import servicioAPI from '../web/servicioAPI';
import servicioLocalStorage from '../web/servicioLocalStorage';

const host='http://localhost:8080';

const cabecerasContenido= {
    'Content-Type': 'application/json'
};

const cabecerasAutorizacion= {
    'Autorizacion': servicioLocalStorage.getValue("token")
};

async function crearSubasta(subasta){
    const endPoint = '/subasta';
    const body = JSON.stringify(subasta);
    const respuesta = await servicioAPI.doPost(endPoint, host, {...cabecerasContenido, ...cabecerasAutorizacion}, body);
    return respuesta;
};

async function consultarTodasSubastas(){
    const endPoint = '/subasta';    
    const respuesta = await servicioAPI.doGet(endPoint, host, cabecerasAutorizacion);
    return respuesta;
};

async function consultarSubastaPorNombre(nombreSubasta){
    const endPoint = '/subasta/'+nombreSubasta;    
    const respuesta = await servicioAPI.doGet(endPoint, host, cabecerasAutorizacion);
    return respuesta;
};

async function consultarSubastaPorTipo(tipo){
    const endPoint = '/subasta/tipo/'+tipo;    
    const respuesta = await servicioAPI.doGet(endPoint, host, cabecerasAutorizacion);
    return respuesta;
}

async function agregarProductoASubasta(nombreSubasta,producto){
    const endPoint = '/subasta/'+nombreSubasta+'/producto';
    const body = JSON.stringify(producto);
    const respuesta = await servicioAPI.doPost(endPoint, host, {...cabecerasContenido, ...cabecerasAutorizacion}, body);
    return respuesta;
};

async function eliminarProductoDeSubasta(nombreSubasta,idProducto,){
    const endPoint = '/subasta/'+nombreSubasta+'/producto/'+idProducto;
    const respuesta = await servicioAPI.doDelete(endPoint, host, cabecerasAutorizacion);
    return respuesta;
};

async function eliminarSubasta(nombreSubasta){
    const endPoint = '/subasta/'+nombreSubasta;
    const respuesta = await servicioAPI.doDelete(endPoint, host, cabecerasAutorizacion);
    return respuesta;
};

async function modificarFechasSubasta(nombreSubasta,fechaInicio, fechaFin){
    if(fechaInicio === null || fechaFin === null){
        throw new Error('Las fechas no pueden ser nulas');
    }    
    const endPoint = `/subasta/${nombreSubasta}/fecha?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`;   
    const respuesta = await servicioAPI.doPatch(endPoint, host,cabecerasAutorizacion,{});
    return respuesta;
};

async function subastasProgramadas(){
    const resultadoConsultar = await consultarTodasSubastas();
    return resultadoConsultar.filter((subasta)=>subasta.estado==='PROGRAMADA');
};

async function subastasEnCurso(estado){
    const resultadoConsultar = await consultarTodasSubastas();
    return resultadoConsultar.filter((subasta)=>subasta.estado==='EN_CURSO');
};



export default {crearSubasta,
                consultarTodasSubastas,
                consultarSubastaPorNombre,
                consultarSubastaPorTipo,
                agregarProductoASubasta, 
                eliminarProductoDeSubasta,
                eliminarSubasta,
                modificarFechasSubasta,
                subastasProgramadas,                
                subastasEnCurso
};


