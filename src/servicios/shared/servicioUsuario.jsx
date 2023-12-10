import servicioAPI from '../web/servicioAPI';
import servicioLocalStorage from '../web/servicioLocalStorage';

const puerto = import.meta.env.VITE_BACKEND_PORT;
const host = import.meta.env.VITE_BACKEND_HOST;
const socket = `${host}:${puerto}`;

const cabecerasContenido= {
    'Content-Type': 'application/json'
};

async function crearUsuario(usuario){
    const endPoint = '/usuario';
    const body = JSON.stringify(usuario);
    const respuesta = await servicioAPI.doPost(endPoint, socket, cabecerasContenido, body);
    return respuesta;
};

async function login(inicioSesion){
    const endPoint = '/usuario/login';
    const body = JSON.stringify(inicioSesion);
    const respuesta = await servicioAPI.doPost(endPoint, socket, cabecerasContenido, body);
    return respuesta;
};

async function cerrarSesion(){
    const endPoint = '/usuario/logout';
    const cabecerasAutorizacion= {
        'Autorizacion': servicioLocalStorage.getValue("token")
    };
    const respuesta = await servicioAPI.doPost(endPoint, socket, cabecerasAutorizacion, {});
    return respuesta;
};

export default {
    crearUsuario, 
    login, 
    cerrarSesion
};