import React from "react";
import MenuEstadoSubasta from "../componentes/MenuEstadoSubasta";
import Banner from "../componentes/Banner";
import Menu from "../componentes/Menu";
import servicioSala from "../servicios/shared/servicioSala";

export default function Subastas() {

    const inscribirUsuarioASubasta = async (correo, subasta) => {
        let salaDeSubasta = await servicioSala.consultarSalasPorSubasta(subasta.nombre)
        .catch(()=>null);

        if(salaDeSubasta == null){
            const nuevaSala = {
                nombre: `sala-${subasta.nombre}`,
                subasta: subasta,
                compradores: []
            };
            await servicioSala.crearSala(nuevaSala);
            salaDeSubasta = await servicioSala.consultarSalaPorNombre(nuevaSala.nombre);
        }
        servicioSala.agregarUsuariosASala(salaDeSubasta.nombre, correo);
    };

    return(
        <React.Fragment>
            <Banner/>
            <Menu/>
            <MenuEstadoSubasta inscribirUsuario={inscribirUsuarioASubasta}/>
        </React.Fragment>
    );
};