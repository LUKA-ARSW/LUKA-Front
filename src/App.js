
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


function App() {
  return (
    <div className="App">
      <Banner/>
      <Menu/>
      <Subasta/>
    </div>
  );
}

export default App;
