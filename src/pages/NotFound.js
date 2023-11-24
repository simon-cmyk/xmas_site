import '../App.css';
import kanelbilde from "../images/cinnamon.jpeg"
import { Link} from 'react-router-dom';
function NotFound() {
    return (
    <div className="app">
        <h1 className='title'>404</h1>
        <h3>Nei, kanelen var ikkje her heller, du får leite ein anna plass.
        </h3>
        <img src={kanelbilde} alt="cinnamon hiding" width="400px"></img><br></br>
        <Link to="/xmas_site/" className='back-button' >Bra jobba uansett</Link>
    </div>
  
    );
  }

export default NotFound;