import '../styles/Inicio.css' ;
import Sofa from '../assets/sofa.png';
import { Link } from 'react-router-dom';

function Inicio() {
    return (
        <>
          <div className="fondoverde">
            <h1>DISEÑA TU INTERIOR</h1>
            <Link to="/productos">
              <button>MOSTRAR MAS</button>
            </Link>
            <img src={Sofa} alt="" />
          </div>
          <div className='parrafo'>
            <p>
              Explora nuestra amplia gama de muebles diseñados para elevar tu espacio. Desde sofás acogedores hasta piezas únicas que transformarán tu hogar, descubre la combinación perfecta de funcionalidad y elegancia.
            </p>
          </div>
        </>
      );
    }
export default Inicio;
