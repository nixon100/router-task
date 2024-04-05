import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Nopage from './pages/Nopage';
import DataScience from './pages/DataScience';
import CyberSecurity from './pages/Cybersecurity';
import DevOps from './pages/DevOps';
import DigitalMarketing from './pages/Digitalmarketing';
import FullStackDevelopment from './pages/FullStackdevelopment';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='blockchain' element={<Blogs/>}/>
      <Route path='cloudcomputing' element={<Contact/>}/>
      <Route path='cybersecurity' element={<CyberSecurity/>}/>
      <Route path='datascience' element={<DataScience/>}/>
      <Route path='devops' element={<DevOps/>}/>
      <Route path='digitalmarketing' element={<DigitalMarketing/>}/>
      <Route path='fullstackdevelopment' element={<FullStackDevelopment/>}/>
      <Route path='*' element={<Nopage/>}/>

    </Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
