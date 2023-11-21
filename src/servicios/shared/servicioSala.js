import servicioAPI from '../web/servicioAPI';

const host='http://localhost:8080';

const cabeceras= {
    'Content-Type': 'application/json'
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

export default {misSubastaProgramadas, 
                misSubastasEnCurso};