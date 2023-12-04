
import { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom';

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
  
  const routes = useRoutes([
    { path: "/", element: <PaginaPrincipal /> },
    { path: "/mis-subastas", element: <MisSubastas /> },
    { path: "/subastas", element: <Subastas /> },
    { path: "/catalogo", element: <CatalogoProductos /> },
    { path: "/subastas/larga-duracion/:idSala", element: <SubastaLarga /> },
    { path: "/subastas/corta-duracion/:idSala", element: <SubastaCorta /> },
    { path: "/agregar-subasta", element: <AgregarSubasta /> },
    { path: "/agregar-producto", element: <AgregarProducto /> },
    { path: "/login", element: <Login /> },
    { path: "/crear-usuario", element: <CrearUsuario /> },
    { path: "/subastas/:idSubasta/info", element: <AdaptadorSubastaInfo /> },
    { path: "/perfil", element: <Perfil /> },
    { path: "/cerrar-sesion", element: <Login /> },
  ]);

  return (
    <div className="App">
      <Suspense fallback={<div>Cargando...</div>}>
        {routes}
      </Suspense>
      
    </div>
  );
}
