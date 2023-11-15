import React from "react";

const categoria = [
    "ARTE",
    "AUTOMOVILES",
    "JOYAS",
    "MUEBLES",
    "ELECTRODOMESTICOS",
    "COLECCIONABLES"
];

export default function Producto() {
    return (
      <React.Fragment>
        <h1>Producto</h1>
        <form action="/producto" method="post">
            <div>
                <label>Nombre:</label>
                <input type="text" name="nombre" id="Nombre"></input>
            </div>
            <div>
                <label>Imagen:</label>
                <input type="file" name="imagen" id="imagen"></input>
            </div>
            <div>
                <label>Precio:</label>
                <input type="number" name="precio" id="precio"></input>
            </div>
            <div>
                <label>Categoría:</label>
                <select name="categoria" id="categoria">
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