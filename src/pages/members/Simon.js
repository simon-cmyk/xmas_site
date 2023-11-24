import '../../App.css';
import memberImage from '../../images/simon.jpeg'; // Import your member image
import { Link} from 'react-router-dom';


function Simon() {
  const memberInfo = {
    name: 'Sukker-Simon',
    appearance: 'Melisavhengig',
    age: 'Ja det har eg.',
    fieldOfStudy: 'Kyb. (4.år). ',
    civilStatus: 'Saman med den andre',
    quote: "Blir gjerne med neste gang :D",
    soda: 'Sover godt, men drømmer sjeldent'
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
          <h3>Ofte sett: {memberInfo.civilStatus} <a href="https://en.wikipedia.org/wiki/%C4%80ne">tøffelen</a></h3>
          <h3>Sitat: "{memberInfo.quote}"</h3>
          <h3>Drøm: "{memberInfo.soda}"</h3>
  
  
          <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
        </div>
      </div>
    </div>
  );
}

export default Simon;