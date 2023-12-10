import servicioAPI from '../web/servicioAPI';
import servicioLocalStorage from '../web/servicioLocalStorage';

const puerto = import.meta.env.VITE_BACKEND_PORT;
const host = import.meta.env.VITE_BACKEND_HOST;
const socket = `${host}:${puerto}`;

const cabecerasContenido= {
    'Content-Type': 'application/json'
};

const cabecerasAutorizacion= {
    'Autorizacion': servicioLocalStorage.getValue("token")
};

async function crearProducto(producto){
    const endPoint = '/producto';
    const body = JSON.stringify(producto);
    const respuesta = await servicioAPI.doPost(endPoint, socket, {...cabecerasContenido, ...cabecerasAutorizacion}, body);
    return respuesta;
};

async function consultarTodosProductos(){
    const endPoint = '/producto';   
    console.log(cabecerasAutorizacion); 
    const respuesta = await servicioAPI.doGet(endPoint, socket, cabecerasAutorizacion);
    return respuesta;
};

async function consultarProductoPorId(idProducto){
    const endPoint = '/producto/id/'+idProducto;    
    const respuesta = await servicioAPI.doGet(endPoint, socket, cabecerasAutorizacion);
    return respuesta;
};

async function consultarProductoPorNombre(nombreProducto){
    const endPoint = '/producto/nombre/'+nombreProducto;    
    const respuesta = await servicioAPI.doGet(endPoint, socket, cabecerasAutorizacion);
    return respuesta;
};

async function consultarProductosPorVendedor(idVendedor){
    const endPoint = '/producto/vendedor/'+idVendedor;    
    const respuesta = await servicioAPI.doGet(endPoint, socket, cabecerasAutorizacion);
    return respuesta;
}

async function modificarProducto(producto, idProducto){
    const endPoint = '/producto/'+idProducto;
    const body = JSON.stringify(producto);
    const respuesta = await servicioAPI.doPut(endPoint, socket, cabecerasAutorizacion, body);
    return respuesta;
}

async function eliminarProducto(idProducto){
    const endPoint = '/producto/'+idProducto;
    const respuesta = await servicioAPI.doDelete(endPoint, socket, cabecerasAutorizacion);
    return respuesta;
};

export default {crearProducto,
                consultarTodosProductos,
                consultarProductosPorVendedor,
                consultarProductoPorId,
                consultarProductoPorNombre,
                modificarProducto,
                eliminarProducto
};

