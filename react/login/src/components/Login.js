import React from 'react';
import styles from './Login.module.css'

const Login = (props) => {
    const {inputs, setInputs}=props;
    const onChange =(e) =>{
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        })
    }
    
    return(
        <>
            <h3> HELLO  {props.fName}</h3>
            <form className={styles.container} >
                <label>First dName</label>
                <input className ={styles.input} type ="text" name= "firstName" onChange={onChange}/>

                <label>Last Name</label>
                <input className ={styles.input} type ="text" name= "lastName" onChange={onChange}/>

                <label>Email</label>
                <input className ={styles.input} type ="text" name= "email" onChange={onChange}/>

                <label>password</label>
                <input className ={styles.input} type ="text" name= "password" onChange={onChange}/>

                <label>Confirm password</label>
                <input className ={styles.input} type ="text" name= "confirm password" onChange={onChange}/>
            </form>
        </>
    );

};

export default Login;