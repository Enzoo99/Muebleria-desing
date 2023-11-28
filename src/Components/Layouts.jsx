import { Outlet, Link } from "react-router-dom";
import '../styles/Layouts.css'




function Layouts() {
    return (
        <>
            <header>

                <ul>
                    <nav>
                        <Link to="/">Inicio</Link >
                        <Link to="/Productos">Productos</Link >
                        <Link to="/Contacto">Contacto</Link >

                    </nav>
                </ul>
            </header>
            <Outlet />
        </>
    );
}

export default Layouts;