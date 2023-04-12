import React from "react";

function Input (props) {
    return (
        <input 
        type={props.type} 
        placeholder={props.placeholder} 
        className={props.className}
        id={props.id}   
        
        />
    )
}

export default Input