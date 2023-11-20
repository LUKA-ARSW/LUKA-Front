
import MisSubastas from './paginas/MisSubastas';
import PaginaPrincipal from './paginas/PaginaPrincipal';
import { Route, Routes } from 'react-router-dom';
import Subastas from './paginas/Subastas';
import CatalogoProductos from './paginas/CatalogoProductos';
import SubastaLarga from './paginas/SubastaLarga';
import SubastaCorta from './paginas/SubastaCorta';


function App() {
  return (
    <div className="App">
     <Routes>
        <Route exact path="/" element={<PaginaPrincipal/>}/>        
        <Route path="/mis-subastas" element={<MisSubastas/>}/>
        <Route path="/subastas" element={<Subastas/>}/>
        <Route path="/catalogo" element={<CatalogoProductos/>}/>
        <Route path="/subastas/larga-duracion/:idSubasta" element={<SubastaLarga/>}/>
        <Route path="/subastas/corta-duracion/:idSubasta" element={<SubastaCorta/>}/>
     </Routes>
    </div>
  );
}

export default App;
