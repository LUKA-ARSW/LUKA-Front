async function doGet(endpoint, host, cabeceras) {
    const url = `${host}${endpoint}`;
    const respuesta = await fetch(url, {
        method: 'GET',
        headers: cabeceras
    }).then(respuesta => respuesta.text())
    .then(datos => parsearJson(datos));
    return respuesta;
}

async function doPost(endpoint, host, cabeceras, body) {
    const url = `${host}${endpoint}`;
    const respuesta = await fetch(url, {
        method: 'POST',
        headers: cabeceras,
        body: body
    }).then(respuesta => respuesta.text())
    .then(datos => parsearJson(datos));
    return respuesta;
}

async function doPatch(endpoint, host, cabeceras, body) {
    const url = `${host}${endpoint}`;
    const respuesta = await fetch(url, {
        method: 'PATCH',
        headers: cabeceras,
        body: body
    }).then(respuesta => respuesta.text())
    .then(datos => parsearJson(datos));
    return respuesta;
}

async function doPut(endpoint, host, cabeceras, body) {
    const url = `${host}${endpoint}`;
    const respuesta = await fetch(url, {
        method: 'PUT',
        headers: cabeceras,
        body: body
    }).then(respuesta => respuesta.text())
    .then(datos => parsearJson(datos));
    return respuesta;
}

async function doDelete(endpoint, host, cabeceras) {
    const url = `${host}${endpoint}`;
    const respuesta = await fetch(url, {
        method: 'DELETE',
        headers: cabeceras
    }).then(respuesta => respuesta.text())
    .then(datos => parsearJson(datos));
    return respuesta;
}

function parsearJson(datos) {
    try {
        return JSON.parse(datos);
    } catch (error) {
        return datos;
    }
}

export default {
    doGet, 
    doPost, 
    doPatch, 
    doPut, 
    doDelete
}