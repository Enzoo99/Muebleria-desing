import '../styles/Productos.css'; 
import Sofa2 from '../assets/Sofa2.png'
import Sofa3 from '../assets/Sofa3.png'
import Sofa4 from '../assets/Sofa4.png'
import Sofa5 from '../assets/Sofa5.png'
import Sofa6 from '../assets/Sofa6.png'
import Sofa7 from '../assets/Sofa7.png'
import Sofa8 from '../assets/Sofa8.png'
import Sofa9 from '../assets/Sofa9.png'

function Productos() {
  return (  
    <div>
    <div className="card-container">
      <div className="card">
        <img src={Sofa2} alt="" />
      </div>
      <div className="card">
        <img src={Sofa3} alt="" />
      </div>
      <div className="card">
        <img src={Sofa4} alt="" />
      </div>
      <div className="card">
        <img src={Sofa5} alt="" />
      </div>
    </div>
    <div className="card-container">
      <div className="card">
        <img src={Sofa6} alt="" />
      </div>
      <div className="card">
        <img src={Sofa7} alt="" />
      </div>
      <div className="card">
        <img src={Sofa8} alt="" />
      </div>
      <div className="card">
        <img src={Sofa9} alt="" />
      </div>
    </div>
  </div>
);
}

export default Productos;
