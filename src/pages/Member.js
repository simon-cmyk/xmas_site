import '../App.css';
import memberImage from '../images/member.jpg'; // Import your member image
import { Link } from 'react-router-dom';


function Member() {
  const memberInfo = {
    name: 'Kar Type God',
    appearance: 'Gammel og grå',
    age: 22,
    fieldOfStudy: 'Livets skole',
    civilStatus: 'Ganske sivil',
    quote: "Don't be a fool, stay in school!",
    soda: 'Vann'
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
          <p>Alder: {memberInfo.age}</p>
          <p>Studie: {memberInfo.fieldOfStudy}</p>
          <p>Sivil Status: {memberInfo.civilStatus}</p>
          <p>Juleråd: "{memberInfo.quote}"</p>
          <p>Favorittbrus: "{memberInfo.soda}"</p>
  
          <Link to="/xmas_site/" className='back-button' >Tilbage te heimesio</Link>
        </div>
      </div>
    </div>
  );
}

export default Member;