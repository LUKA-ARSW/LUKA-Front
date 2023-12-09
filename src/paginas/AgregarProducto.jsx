import React from "react";
import Banner from "../componentes/Banner";
import Menu from "../componentes/Menu";
import categoria from "../util/Categorias";
import servicioProducto from "../servicios/shared/servicioProducto";
import servicioLocalStorage from "../servicios/web/servicioLocalStorage";
import servicioJwt from "../servicios/security/servicioJwt";

export default function AgregarProducto() {
    const [producto, setProducto] = React.useState({});
    const [imagen, setImagen] = React.useState(null);
    const [infoUsuario, setInfoUsuario] = React.useState({});

    React.useEffect(()=>{
        const token = servicioJwt.decryptToken(servicioLocalStorage.getValue("token"));
        setInfoUsuario(token);
    },[]);

    const crearId = () => {
        const num= Math.floor(Math.random() * (999999 - 100000)) + 100000;
        if(!producto?.nombre){
            throw new Error("El producto debe tener un nombre");
        }
        return `${producto.nombre.replace(/ /g,"_")}_${num}`;
    };

    const cambiarImagen = ({target:{id,files}}) => {
        const imagen = files[0];
        setImagen(imagen);
    }


    const cambiarInfoProducto = (key, value)=>{
        setProducto({
            ...producto,
            [key]: value
        });
    }

    const agregarProducto = (event) => {
        event.preventDefault();
        servicioProducto.crearProducto({
            ...producto,
            foto: imagen.name,
            idProducto: crearId(),
            vendedor: infoUsuario.correo
        }).then(respuesta => {
            alert("Producto creado con éxito");
        }).catch(error => {
            alert("Error al crear el producto");            
        }).finally(()=>{
            setProducto({});
        });
    };

    return (
      <React.Fragment>
        <Banner/>
        <Menu/>
        <h1>Producto</h1>
        <form onSubmit={agregarProducto}>
            <div>
                <label>Nombre:</label>
                <input type="text" name="nombre" id="nombre" value={producto.nombre} onChange={(event)=>cambiarInfoProducto(event.target.id,event.target.value)} required></input>
            </div>
            <div>
                <label>Imagen:</label>
                <input type="file" name="imagen" id="imagen"  onChange={cambiarImagen} required></input>
            </div>
            <div>
                <label>Precio:</label>
                <input type="number" name="precio" id="precio" value={producto.precio} onChange={(event)=>cambiarInfoProducto(event.target.id,event.target.value)} required></input>
            </div>
            <div>
                <label>Categoría:</label>
                <select name="categoria" id="categoria" onChange={(event)=>cambiarInfoProducto(event.target.id,event.target.value)} required>
                    <option value="">Seleccione una categoría</option>
                    {categoria.map((categoria) => (
                        <option value={categoria}>{categoria}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Descripción:</label>
                <textarea name="descripcion" id="descripcion" value={producto.descripcion} onChange={(event)=>cambiarInfoProducto(event.target.id,event.target.value)} ></textarea>
            </div>
            <button type="submit">Agregar</button>
        </form>
      </React.Fragment>
    );
}