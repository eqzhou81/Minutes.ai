import React from 'react';
import './Transcribe.scoped.css';

function Transcribe(props) {
  return (
    <div className="transcribe-container">
        <div className="transcribe-content">
          <div className="transcribe-title">
              <div className="transcribe-bar">
                <img src={require('./logo-64.png')} className="transcribe-indicator" width="20px" height="20px"/>
                <p className="transcribe-header">Transcription</p>
              </div>
          </div>

<<<<<<< HEAD
          <p id="message"></p>
          <p id="real-time-title" style={{display: "none"}}></p>
=======
          {props.text}
>>>>>>> lincoln-working
        </div>
    </div>
  )
}

export default Transcribe;