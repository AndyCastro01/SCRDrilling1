import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout  from "./pages/Layout";
import Contacto  from "./pages/Contacto";
import Home  from "./pages/Home";
import Cursos  from "./pages/Cursos";
import Insumos  from "./pages/Insumos";
import Nosotros  from "./pages/Nosotros";


function App() {
  return (
    <div className="App">
<Routes>
        <Route path="/" element={<Layout/>}>
<nav class="navbar navbar-expand-lg navbar navbar-expand-lg bg-light static-top barradenavegacion">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="https://i.postimg.cc/pdVnNpV0/LOGO-SCR.png" alt="70" height="55"/>
    </a>
    <a class="navbar-brand mb-0 h1 titulonav">SCR Drilling Offshore</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active catnavbar" aria-current="page"><Route path="/Contacto" element={<Contacto/>} /> &nbsp; &nbsp; </a>
        </li>
        <li class="nav-item">
          <a class="nav-link catnavbar" href="#">Cursos &nbsp; &nbsp; </a>
        </li>
        <li class="nav-item">
          <a class="nav-link catnavbar" href="#">Venta de insumos &nbsp; &nbsp; </a>
        </li>
        <li class="nav-item">
          <a class="nav-link catnavbar" href="#">Contacto </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</Route>
      </Routes>

      
           

      


    </div>
  );
}

export default App;
