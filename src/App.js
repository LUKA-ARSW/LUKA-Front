
import Banner from './componentes/Banner';
import Menu from './componentes/Menu';
import SeccionMisSubastasProgramadas from './componentes/SeccionMisSubastasProgramadas';
import MisSubastasProgramadas from './paginas/MisSubastaProgramadas';
import MisSubastas from './paginas/MisSubastas';
import PaginaPrincipal from './paginas/PaginaPrincipal';
import Producto from './paginas/Producto';
import Usuario from './paginas/Usuario';
import SubastaInfo from './paginas/SubastaInfo';
import Subasta from './paginas/Subasta';
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
