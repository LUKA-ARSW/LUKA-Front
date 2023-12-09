import servicioAPI from '../web/servicioAPI';
import servicioLocalStorage from '../web/servicioLocalStorage';

const puerto=13000;
const host=`http://localhost:${puerto}`;

const cabecerasContenido= {
    'Content-Type': 'application/json'
};

const cabecerasAutorizacion= {
    'Autorizacion': servicioLocalStorage.getValue("token")
};

async function crearSala(sala){
    const endPoint = '/sala';
    const body = JSON.stringify(sala);
    const respuesta = await servicioAPI.doPost(endPoint, host, {...cabecerasContenido, ...cabecerasAutorizacion}, body);
    return respuesta;
};

async function consultarSalaPorNombre(nombreSala){
    const endPoint = '/sala/'+nombreSala;    
    const respuesta = await servicioAPI.doGet(endPoint, host, cabecerasAutorizacion);
    return respuesta;
};

async function consultarSubastasPorUsuario(comprador, estado){
    const endPoint = '/sala/comprador/'+comprador +'?estado='+estado;    
    const respuesta = await servicioAPI.doGet(endPoint, host, cabecerasAutorizacion);
    return respuesta;
};

async function consultarSalasPorSubasta(idSubasta){
    const endPoint = '/sala/subasta/'+idSubasta;    
    const respuesta = await servicioAPI.doGet(endPoint, host, cabecerasAutorizacion);
    return respuesta;

} 

async function agregarUsuariosASala(nombreSala,correoUsuario){
    const endPoint = `/sala/${nombreSala}/${correoUsuario}`; 
    const respuesta = await servicioAPI.doPost(endPoint, host, cabecerasAutorizacion);
    return respuesta;
};

async function eliminarUsuarioDeSala(nombreSala,correoUsuario){
    const endPoint = `/sala/${nombreSala}/${correoUsuario}`; 
    const respuesta = await servicioAPI.doDelete(endPoint, host, cabecerasAutorizacion);
    return respuesta;
};

async function pujarProducto(nombreSala,comprador,idProducto,cantidadAPujar){
    const endPoint = '/sala/'+nombreSala;
    const body = JSON.stringify({
        'comprador':comprador, 
        'idProducto':idProducto,
        'cantidadAPujar':cantidadAPujar
    });          
    const respuesta = await servicioAPI.doPatch(endPoint, host, {...cabecerasContenido, ...cabecerasAutorizacion},body);
    return respuesta;
};

async function misSubastaProgramadas(idUsuario){
    const endPoint = '/sala';
    const resultadoConsultar = await servicioAPI.doGet(endPoint, host, cabecerasAutorizacion);
    return resultadoConsultar.filter((sala)=>sala.compradores.includes(idUsuario))
        .filter((salas)=>salas.subasta.estado==='PROGRAMADA')
        .map ((sala)=>sala.subasta);
};

async function misSubastasEnCurso(idUsuario){
    const endPoint = '/sala';
    const resultadoConsultar = await servicioAPI.doGet(endPoint, host, cabecerasAutorizacion);
    return resultadoConsultar.filter((sala)=>sala.compradores.includes(idUsuario))
        .filter((salas)=>salas.subasta.estado==='EN_CURSO')
        .map ((sala)=>sala.subasta);
};

export default {crearSala,
                consultarSalaPorNombre,
                consultarSubastasPorUsuario,
                consultarSalasPorSubasta,
                agregarUsuariosASala,
                eliminarUsuarioDeSala,
                pujarProducto,
                misSubastaProgramadas, 
                misSubastasEnCurso};