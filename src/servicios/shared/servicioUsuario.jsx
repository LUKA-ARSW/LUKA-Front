import servicioAPI from '../web/servicioAPI';
import servicioLocalStorage from '../web/servicioLocalStorage';

const puerto=13000;
const host=`http://localhost:${puerto}`;

const cabecerasContenido= {
    'Content-Type': 'application/json'
};




async function crearUsuario(usuario){
    const endPoint = '/usuario';
    const body = JSON.stringify(usuario);
    const respuesta = await servicioAPI.doPost(endPoint, host, cabecerasContenido, body);
    return respuesta;
};

async function login(inicioSesion){
    const endPoint = '/usuario/login';
    const body = JSON.stringify(inicioSesion);
    const respuesta = await servicioAPI.doPost(endPoint, host, cabecerasContenido, body);
    return respuesta;
};

async function cerrarSesion(){
    const endPoint = '/usuario/logout';
    const cabecerasAutorizacion= {
        'Autorizacion': servicioLocalStorage.getValue("token")
    };
    const respuesta = await servicioAPI.doPost(endPoint, host, cabecerasAutorizacion, {});
    return respuesta;
};

export default {
    crearUsuario, 
    login, 
    cerrarSesion
};