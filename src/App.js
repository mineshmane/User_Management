import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/login'

function App() {
  return (

  

    <Router>
      <Route exact path="/login" component={Login} />
      
      {/* <Route path="/dashboard/getNotesByLabel" component={NotesByLabel} /> */}


{/* 
      <Route path="/dashboard/Archive" component={GetArchivedNotes} />
      <Route path="/dashboard/TrashNotes" component={GetTrashNotes} /> */}



    </Router>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
