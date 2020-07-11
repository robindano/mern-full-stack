import React, {useState} from 'react';
import './App.css';
import Login from './components/Login';



function App() {

  const[state, setState]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  });
  
  return (
    <div className="App">
      
      <Login inputData={state} setInputs={setState}/>
      

    </div>
  );
}

export default App;
