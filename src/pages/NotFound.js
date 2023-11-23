import '../App.css';
import kanelbilde from "../images/cinnamon.jpeg"
function NotFound() {
    return (
    <div className="app">
        <h1 className='title'>404</h1>
        <h3>Nei, kanelen var ikkje her heller, du får leite ein anna plass.
        </h3>
        <img src={kanelbilde} alt="cinnamon hiding" width="400px"></img>
    </div>
  
    );
  }

export default NotFound;