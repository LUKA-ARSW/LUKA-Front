import servicioJwt from "./servicioJwt";

import servicioLocalStorage from "../web/servicioLocalStorage";

const usuarioAutenticado = () =>{
    try{
        const infoUsuario = servicioJwt.decryptToken(servicioLocalStorage.getValue("token"));
        
        return infoUsuario!=null;

    }catch(error){
        
        return false;
    }

};

export default {
    usuarioAutenticado
};