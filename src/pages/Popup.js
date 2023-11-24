// Popup.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import '../App.css';

Modal.setAppElement('#root'); // Set the root element for accessibility

const customModalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.92)', // Adjust the transparency here
    },
    content: {
      border: 'none',
      background: 'none',
      padding: '20px',
      width: '50%',
      margin: 'auto',
    },
  };

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Intro Modal"
      style={customModalStyles}
    >
      <button onClick={closeModal}>x</button>
      <h3>Jakta etter den forvilla <a href="https://no.wikipedia.org/wiki/Kanel">kanel!</a></h3>
      <p>
        Det var en iskald desemberkveld på den lille landsbyen Nardo, hvor snøfnugg danset i den stille natten og julelysene kastet sitt varme skjær over hustakene. Julefreden lå som et teppe over landskapet, men i det stemningsfulle bakeriet til Surdeig-Sverre var det langt fra ro og harmoni. Surdeig-Sverre var kjent for å lage de mest himmelske kanelbollene på hele Nardo. Men denne julen var annerledes. Den berømte kanelen, den hemmelige ingrediensen som ga bollene hans en guddommelig smak, var blitt stjålet!
      </p> <p>
Landsbyen var i sjokk. Kaneltyveriet spredte seg som en vinterstorm, og det var ingen som visste hvem som kunne være så dristig. Og ikkje minst frekk nok til å stjele selve hjertet av Torsguttas julebakst. Ingen hadde sett noe mistenkelig, men ryktene gikk om en mystisk skikkelse som hadde blitt sett listende rundt bakeriet den kvelden tyveriet skjedde. Mysteriet med Den Forsvunne Kanelen var i gang, og det var opp til landsbyens nysgjerrige og modige gutter å løse gåten før julen ringte inn.
</p><p>Etter å ha endevendt huset fant Avokado-Andreas pebaren bak tven. Mellom putene fant Sukker-Simon zalo'n. Fisketranen vart sjølvsagt funnen av Ørret-Øystein. Og Maistortilla-Marius, ja ha lever han og.</p>
<p>Gjennom de 24 dagene før julaften skal vi følge guttenes eventyr, følge spor og avsløre hemmeligheter mens de prøver å bringe tilbake kanelen, redde julestemningen og sikre at Surdeig-Sverre sine kanelboller blir like fantastiske som alltid. Velkommen til Tors, der magi, mysterier og kanelboller venter bak hver luke i julekalenderen!
      </p>
      <button onClick={closeModal}>Hjelp oss på vegen, for å ta opp jakta
      på kaneltjuven</button>
    </Modal>
  );
};

export default Popup;