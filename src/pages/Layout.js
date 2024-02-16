import { Outlet, Link } from "react-router-dom";

const Layout = () =>{
 return <div>
    <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Nosotros">Nosotros</Link>
          </li>
          <li>
            <Link to="/Cursos">Cursos</Link>
          </li>
          <li>
            <Link to="/Contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/Insumos">Insumos</Link>
          </li>
        </ul>
    </nav>
    <hr />
    <Outlet />
 </div>;
}

export default Layout;