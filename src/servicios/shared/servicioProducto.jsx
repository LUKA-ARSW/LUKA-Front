import servicioAPI from '../web/servicioAPI';
import servicioLocalStorage from '../web/servicioLocalStorage';

const host='http://localhost:8080';

const cabecerasContenido= {
    'Content-Type': 'application/json'
};

const cabecerasAutorizacion= {
    'Autorizacion': servicioLocalStorage.getValue("token")
};

async function crearProducto(producto){
    const endPoint = '/producto';
    const body = JSON.stringify(producto);
    const respuesta = await servicioAPI.doPost(endPoint, host, {...cabecerasContenido, ...cabecerasAutorizacion}, body);
    return respuesta;
};

async function consultarTodosProductos(){
    const endPoint = '/producto';    
    const respuesta = await servicioAPI.doGet(endPoint, host, cabecerasAutorizacion);
    return respuesta;
};

async function consultarProductoPorId(idProducto){
    const endPoint = '/producto/id/'+idProducto;    
    const respuesta = await servicioAPI.doGet(endPoint, host, cabecerasAutorizacion);
    return respuesta;
};

async function consultarProductoPorNombre(nombreProducto){
    const endPoint = '/producto/nombre/'+nombreProducto;    
    const respuesta = await servicioAPI.doGet(endPoint, host, cabecerasAutorizacion);
    return respuesta;
};

async function modificarProducto(producto, idProducto){
    const endPoint = '/producto/'+idProducto;
    const body = JSON.stringify(producto);
    const respuesta = await servicioAPI.doPut(endPoint, host, cabecerasAutorizacion, body);
    return respuesta;
}

async function eliminarProducto(idProducto){
    const endPoint = '/producto/'+idProducto;
    const respuesta = await servicioAPI.doDelete(endPoint, host, cabecerasAutorizacion);
    return respuesta;
};

export default {crearProducto,
                consultarTodosProductos,
                consultarProductoPorId,
                consultarProductoPorNombre,
                modificarProducto,
                eliminarProducto
};

