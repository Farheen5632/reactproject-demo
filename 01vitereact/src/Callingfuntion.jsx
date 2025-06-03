
import React, { useState } from 'react';
function Callingfuntion() {
  const [showModal, setShowModal] = useState(false);
  function buttonClick() {
    //console.log("On the click of button this messag display...!!");
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }
  return (
    <>
      <button onClick={buttonClick}>Click Me</button>
      {showModal && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.modal}>
            <p>On the click of button this message displays...!!</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
export default Callingfuntion;

const modalStyles = {
  overlay: {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex', justifyContent: 'center', alignItems: 'center'
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
  }
};
