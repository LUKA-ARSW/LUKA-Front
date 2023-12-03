import Login from '../../paginas/Login';
import servicioAPI from '../web/servicioAPI';

const host='http://localhost:8080';

const cabeceras= {
    'Content-Type': 'application/json'
};

async function crearUsuario(usuario){
    const endPoint = '/usuario';
    const body = JSON.stringify(usuario);
    const respuesta = await servicioAPI.doPost(endPoint, host, cabeceras, body);
    return respuesta;
};

async function login(inicioSesion){
    const endPoint = '/usuario/login';
    const body = JSON.stringify(inicioSesion);
    const respuesta = await servicioAPI.doPost(endPoint, host, cabeceras, body);
    return respuesta;
};

async function cerrarSesion(){
    const endPoint = '/usuario/logout';
    const respuesta = await servicioAPI.doPost(endPoint, host, cabeceras, {});
    return respuesta;
};

export default {
    crearUsuario, 
    login, 
    cerrarSesion
};