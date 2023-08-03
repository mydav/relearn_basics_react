import React from 'react';
import './index.scss';

const Modal = ({open, setOpen, children}) => (
  <div className={`overlay animated ${open ? 'show' : ''} `}>
    <div className='modal'>
      <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
        <title />
        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
      </svg>
      <div className="content">{children}</div>
      
    </div>
  </div>
)

function App() {
  const [openModal, setOpenModal] = React.useState(false)
  const [message, setMessage] = React.useState('');
  const [alert, setAlert] = React.useState(false);
  const [userMessage, setUserMessage] = React.useState('');

  const handleSend = () => {
    setOpenModal(false);
    setAlert(true);
    setUserMessage(message);
  };

  return (
    <div className="App"> 
      <button onClick = {() => setOpenModal(true)} className="button">Modal</button>
      <Modal open={openModal} setOpen={setOpenModal} message={message} setMessage={setMessage}>
       <div className="input-container"> 
          <h2>Write your message:</h2>
          <input value={message} onChange={(e) => setMessage(e.target.value)} />
          <button onClick={handleSend} className="button">Send</button>
        </div>
      </Modal>
      {alert && <h2>Your message has been sent:</h2>}
      {userMessage && <h2 className='userMessage'>{userMessage}</h2>}
    </div>
  );
}

export default App;
