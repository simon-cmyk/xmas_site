import '../../App.css';
import memberImage from '../../images/marius.jpeg'; // Import your member image
import { Link} from 'react-router-dom';


function Marius() {
  
  const memberInfo = {
    name: 'Maistortilla-Marius',
    appearance: 'Hemmelighetsfull',
    age: 'Ingen kommentar',
    fieldOfStudy: 'Kyb 4.klasse, men poker på fritid',
    civilStatus: 'Ikkje hos oss',
    quote: "Javel, se det!",
    soda: 'Gjerne det, men ikke så lenge'
  };

  const styles = {
    memberContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '50px',
      color: 'black',
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
          <h3>Sier gjerne: "{memberInfo.quote}"</h3>
          <h3>Badstue: "{memberInfo.soda}"</h3>
  
          <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
        </div>
      </div>
    </div>
  );
}

export default Marius;