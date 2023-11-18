
import MisSubastas from './paginas/MisSubastas';
import PaginaPrincipal from './paginas/PaginaPrincipal';
import { Route, Routes } from 'react-router-dom';
import Subastas from './paginas/Subastas';
import CatalogoProductos from './paginas/CatalogoProductos';


function App() {
  return (
    <div className="App">
     <Routes>
        <Route exact path="/" element={<PaginaPrincipal/>}/>        
        <Route path="/mis-subastas" element={<MisSubastas/>}/>
        <Route path="/subastas" element={<Subastas/>}/>
        <Route path="/catalogo" element={<CatalogoProductos/>}/>
     </Routes>
    </div>
  );
}

export default App;
