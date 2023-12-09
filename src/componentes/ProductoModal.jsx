import React from "react";

export default function ProductoModal({children, estado, cambiarEstado}){
    return (
        <React.Fragment>
            {
                estado &&                
                <div className="contenedorModal">
                    <div className="contenido">
                        {children}
                        <button type="button" onClick={()=>cambiarEstado(false)}>
                            cerrar modal
                        </button>
                    </div>

                </div>
            }

        </React.Fragment>


    );
}