import '../App.css';
import klara from "../images/klara.avif"
import { Link } from 'react-router-dom';
function Peeking() {
    return (
    <div className="app">
        <h1 className='title'>Er du her før tida?</h1>
        <h3 id="warning">No må du ikkje sniktitte...
        Vi har nemlig ikkje komt så langt.
        </h3>
        <img src={klara} alt="Klara følger med" width="400px"></img> <br></br>
        <Link to="/xmas_site/" className='back-button' >Ta meg heim, eg lovar å ikkje sniktitte igjen</Link>
    </div>
  
    );
  }

export default Peeking;