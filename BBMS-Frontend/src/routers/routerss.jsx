import Rccregister from '../pages/componentregister/rccregister.jsx';
import Plateletregister from '../pages/componentregister/plateletregister.jsx';
import Ffpregister from '../pages/componentregister/ffpregister.jsx';
import Buffycoatregister from '../pages/componentregister/buffycoatregister.jsx';
import Home from '../pages/home.jsx';
import Login from '../pages/login.jsx';
import Register from '../pages/AdminRegistrationPage.jsx';
import Donorregisterform from '../pages/donorregisterform.jsx';
import App from '../App.jsx';
import Adminhome from '../pages/Adminhome.jsx';
import AdminRegistrationPage from '../pages/AdminRegistrationPage.jsx';
import Componentupdate from '../pages/componentupdate.jsx';
import ComponentRegisterSuccess from '../pages/componentregister/Componentregistersuccess.jsx';
import Passwordchange from '../pages/passwordchange.jsx';
import Componentissue from '../pages/componentissue.jsx';
import Buffycoatupdate from '../pages/componentupdate/buffycoatupdate.jsx';
import Ffpupdate from '../pages/componentupdate/ffpupdate.jsx';
import Plateletupdate from '../pages/componentupdate/plateletupdate.jsx';
import Rccupdate from '../pages/componentupdate/rccupdate.jsx';


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
  {
    path: '/admin',
    element: <Adminhome />
  },
  {
    path: '/adminregistrationpage',
    element: <AdminRegistrationPage />
  },
  {
    path: '/update',
    element: <Componentupdate />
  },
  {
    path: '/component/ComponentRegisterSuccess',
    element: <ComponentRegisterSuccess />
  },
  {
    path: '/register/passwordchange',
    element: <Passwordchange />
  },
  {
    path: '/componentissue',
    element: <Componentissue />
  },
  {
    path: '/update/buffycoatupd',
    element: <Buffycoatupdate />
  },
  {
    path: '/update/ffprupd',
    element: <Ffpupdate />
  },
  {
    path: '/update/plateletupd',
    element: <Plateletupdate />
  },
  {
    path: '/update/rccupd',
    element: <Rccupdate />
  }


];

export default routerss;
