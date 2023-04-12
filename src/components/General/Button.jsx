import React, {useState} from "react";

function Button (props) {
    return(
        <button onClick={props.onClick} className={props.className}>
            {props.icon}
        </button>
    )
}

export default Button;