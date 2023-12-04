
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import RutaProtegida from './componentes/RutaProtegida';

const MisSubastas = lazy(() => import('./paginas/MisSubastas'));
const PaginaPrincipal = lazy(() => import('./paginas/PaginaPrincipal'));
const Subastas = lazy(() => import('./paginas/Subastas'));
const CatalogoProductos = lazy(() => import('./paginas/CatalogoProductos'));
const SubastaLarga = lazy(() => import('./paginas/SubastaLarga'));
const SubastaCorta = lazy(() => import('./paginas/SubastaCorta'));
const Login = lazy(() => import('./paginas/Login'));
const CrearUsuario = lazy(() => import('./paginas/CrearUsuario'));
const AgregarSubasta = lazy(() => import('./paginas/AgregarSubasta'));
const AdaptadorSubastaInfo = lazy(() => import('./componentes/AdaptadorSubastaInfo'));
const AgregarProducto = lazy(() => import('./paginas/AgregarProducto'));
const Perfil = lazy(() => import('./paginas/Perfil'));

export default function App() {
  
  const rutasProtegidas = [
    { path: "/", element: PaginaPrincipal},
    { path: "/mis-subastas", element: MisSubastas},
    { path: "/subastas", element: Subastas },
    { path: "/catalogo", element: CatalogoProductos},
    { path: "/subastas/larga-duracion/:idSala", element: SubastaLarga },
    { path: "/subastas/corta-duracion/:idSala", element: SubastaCorta },
    { path: "/agregar-subasta", element: AgregarSubasta },
    { path: "/agregar-producto", element: AgregarProducto },
    { path: "/subastas/:idSubasta/info", element: AdaptadorSubastaInfo},
    { path: "/perfil", element: Perfil },
    { path: "/cerrar-sesion", element: Login },
  ];

  const rutasSencillas = [
    { path: "/login", element: Login },
    { path: "/crear-usuario", element: CrearUsuario },
  ];


  return (


    <div className="App">
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          {rutasProtegidas.map(({ path, element }) => (
            <Route key={path} path={path} element={<RutaProtegida componente={element}/>} />
          ))}

          {rutasSencillas.map(({ path, element:Componente }) => (
            <Route key={path} path={path} element={<Componente/>} />
          ))}
        </Routes>
      </Suspense>
      
    </div>
  );
}
