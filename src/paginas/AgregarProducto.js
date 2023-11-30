import React from "react";
import Banner from "../componentes/Banner";
import Menu from "../componentes/Menu";
import categoria from "../util/Categorias";

export default function AgregarProducto() {

    const agregarProducto = (e) => {};

    return (
      <React.Fragment>
        <Banner/>
        <Menu/>
        <h1>Producto</h1>
        <form onSubmit={agregarProducto}>
            <div>
                <label>Nombre:</label>
                <input type="text" name="nombre" id="Nombre" required></input>
            </div>
            <div>
                <label>Imagen:</label>
                <input type="file" name="imagen" id="imagen" required></input>
            </div>
            <div>
                <label>Precio:</label>
                <input type="number" name="precio" id="precio"required></input>
            </div>
            <div>
                <label>Categoría:</label>
                <select name="categoria" id="categoria" required>
                    <option value="">Seleccione una categoría</option>
                    {categoria.map((categoria) => (
                        <option value={categoria}>{categoria}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Descripción:</label>
                <textarea name="descripcion" id="descripcion"></textarea>
            </div>
            <button type="submit">Agregar</button>
        </form>
      </React.Fragment>
    );
}