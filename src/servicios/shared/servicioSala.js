import servicioAPI from '../web/servicioAPI';

const host='http://localhost:8080';

const cabeceras= {
    'Content-Type': 'application/json'
};
async function crearSala(sala){
    const endPoint = '/sala';
    const body = JSON.stringify(sala);
    const respuesta = await servicioAPI.doPost(endPoint, host, cabeceras, body);
    return respuesta;
};

async function consultarSalaPorNombre(nombreSala){
    const endPoint = '/sala/'+nombreSala;    
    const respuesta = await servicioAPI.doGet(endPoint, host, {});
    return respuesta;
};

async function agregarUsuariosASala(nombreSala,correoUsuario){
    const endPoint = `/sala/${nombreSala}/${correoUsuario}`; 
    const respuesta = await servicioAPI.doPost(endPoint, host, {});
    return respuesta;
};

async function eliminarUsuarioDeSala(nombreSala,correoUsuario){
    const endPoint = `/sala/${nombreSala}/${correoUsuario}`; 
    const respuesta = await servicioAPI.doDelete(endPoint, host, {});
    return respuesta;
};

async function pujarProducto(nombreSala,comprador,idProducto,cantidadAPujar){
    const endPoint = '/sala/'+nombreSala;
    const body = JSON.stringify({
        'comprador':comprador, 
        'idProducto':idProducto,
        'cantidadAPujar':cantidadAPujar
    });          
    const respuesta = await servicioAPI.doPath(endPoint, host, cabeceras,body);
    return respuesta;
};

async function misSubastaProgramadas(idUsuario){
    const endPoint = '/sala';
    const resultadoConsultar = await servicioAPI.doGet(endPoint, host, {});
    return resultadoConsultar.filter((sala)=>sala.compradores.includes(idUsuario))
        .filter((salas)=>salas.subasta.estado==='PROGRAMADA')
        .map ((sala)=>sala.subasta);
};

async function misSubastasEnCurso(idUsuario){
    const endPoint = '/sala';
    const resultadoConsultar = await servicioAPI.doGet(endPoint, host, {});
    return resultadoConsultar.filter((sala)=>sala.compradores.includes(idUsuario))
        .filter((salas)=>salas.subasta.estado==='EN_CURSO')
        .map ((sala)=>sala.subasta);
};

export default {crearSala,
                consultarSalaPorNombre,
                agregarUsuariosASala,
                eliminarUsuarioDeSala,
                pujarProducto,
                misSubastaProgramadas, 
                misSubastasEnCurso};