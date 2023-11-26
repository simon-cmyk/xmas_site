import '../../App.css';
import memberImage from '../../images/sverre.jpeg'; // Import your member image
import { Link} from 'react-router-dom';


function Sverre() {
  const memberInfo = {
    name: 'Surdeig-Sverre',
    appearance: 'Joggende',
    age: 'yngst',
    fieldOfStudy: 'Kybernetikk og Robotikk (3.året)',
    civilStatus: 'I Betel',
    quote: 'Brooo, se her! *Viser ein gøy meme*',
    soda: 'Har ein 40-år gammal surdeigstartar'
  };

  const styles = {
    memberContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '50px',
    },
    memberImage: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      marginBottom: '20px',
    },
    memberDetails: {
      textAlign: 'center',
    },
  };
  

  return (
    <div className="app">
      <h1 className="title">En {memberInfo.appearance} Torsgutt:</h1>
      <div style={styles.memberContainer}>
        <img src={memberImage} alt="Member" style={styles.memberImage} />
        <div style={styles.memberDetails}>
          <h2>{memberInfo.name}</h2>
          <h3>Alder: {memberInfo.age}</h3>
          <h3>Studie: {memberInfo.fieldOfStudy}</h3>
          <h3>Ofte sett: {memberInfo.civilStatus}</h3>
          <h3>Sitat: "{memberInfo.quote}"</h3>
          <h3>Hvorfor surdeig: "{memberInfo.soda}"</h3>
  
  
          <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
        </div>
      </div>
    </div>
  );
}

export default Sverre;