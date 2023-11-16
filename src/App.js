
import Banner from './componentes/Banner';
import Menu from './componentes/Menu';
import MisSubastas from './paginas/MisSubastas';
import PaginaPrincipal from './paginas/PaginaPrincipal';
import Producto from './paginas/Producto';
import Usuario from './paginas/Usuario';


function App() {
  return (
    <div className="App">
      <Banner/>
      <Menu/>
      <Usuario/>
    </div>
  );
}

export default App;
