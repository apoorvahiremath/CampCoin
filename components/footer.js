import React from "react";
// import './footer.css'
export default ()=>{
    return(
    <div 
    className="text-center p-3"
        style={{
            padding: 15,
            textAlign: 'center',
            fontSize: 14,
            backgroundColor: 'lightgray',
            color: '#37A7E0',
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: 50
        }}

    >
        <span style= {{opacity: 0.7}} >© 2021 Copyright: </span>Developed by <a target="_blank" style={{color: '#2284b6'}} href="https://www.linkedin.com/in/apoorva-hiremath-68a1a219"> <b>Apoorva Hiremath</b></a>
    </div>
    );
}