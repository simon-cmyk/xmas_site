import '../../App.css';
import memberImage from '../../images/andreas.jpeg'; // Import your member image
import { Link} from 'react-router-dom';


function Andreas() {
  
  const memberInfo = {
    name: 'Avokado-Andreas',
    appearance: 'Fantastisk',
    age: "Eldst",
    fieldOfStudy: 'Bygg og miljøteknikk, faktisk ikke kyb',
    civilStatus: 'Humrande etter at du finn ei bokj i putetrekket ditt',
    quote: "Det er murbra!",
    soda: 'Det er denna karen ja'
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
          <h3>Blodgivar: "{memberInfo.soda}"</h3>
  
  
          <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
        </div>
      </div>
    </div>
  );
}

export default Andreas;