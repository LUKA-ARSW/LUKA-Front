
import MisSubastas from './paginas/MisSubastas';
import PaginaPrincipal from './paginas/PaginaPrincipal';
import { Route, Routes } from 'react-router-dom';
import Subastas from './paginas/Subastas';
import CatalogoProductos from './paginas/CatalogoProductos';
import SubastaLarga from './paginas/SubastaLarga';
import SubastaCorta from './paginas/SubastaCorta';
import Login from './paginas/Login';
import CrearUsuario from './paginas/CrearUsuario';
import AgregarSubasta from './paginas/AgregarSubasta';
import AdaptadorSubastaInfo from './componentes/AdaptadorSubastaInfo';
import AgregarProducto from './paginas/AgregarProducto';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route exact path="/" element={<PaginaPrincipal/>}/>        
        <Route path="/mis-subastas" element={<MisSubastas/>}/>
        <Route path="/subastas" element={<Subastas/>}/>
        <Route path="/catalogo" element={<CatalogoProductos/>}/>
        <Route path="/subastas/larga-duracion/:idSala" element={<SubastaLarga/>}/>
        <Route path="/subastas/corta-duracion/:idSala" element={<SubastaCorta/>}/>
        <Route path="/agregar-subasta" element={<AgregarSubasta/>}/>
        <Route path="/agregar-producto" element={<AgregarProducto/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/crear-usuario" element={<CrearUsuario/>}/>
        <Route path="/subastas/:idSubasta/info" element ={<AdaptadorSubastaInfo/>}/>
     </Routes>
    </div>
  );
}

export default App;
