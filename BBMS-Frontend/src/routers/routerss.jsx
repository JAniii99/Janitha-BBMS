import Rccregister from '../pages/componentregister/rccregister.jsx';
import Plateletregister from '../pages/componentregister/plateletregister.jsx';
import Ffpregister from '../pages/componentregister/ffpregister.jsx';
import Buffycoatregister from '../pages/componentregister/buffycoatregister.jsx';
import Home from '../pages/home.jsx';
import Login from '../pages/login.jsx';
import Register from '../pages/loginregister.jsx';
import Donorregisterform from '../pages/donorregisterform.jsx';
import App from '../App.jsx';

const routerss = [
  {
    path: '/',
    element: <App />, 
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/donor',
    element: <Donorregisterform />,
  },
  {
    path: '/component/rccregister',
    element: <Rccregister />,
  },
  {
    path: '/component/plateletregister',
    element: <Plateletregister />,
  },
  {
    path: '/component/ffpregister',
    element: <Ffpregister />,
  },
  {
    path: '/component/buffycoatregister',
    element: <Buffycoatregister />,
  },
];

export default routerss;
