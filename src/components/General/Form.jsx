import React from "react";
import Input from "./Input"
import Label from "./Label"
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCross, faPlusCircle, faXmark } from '@fortawesome/free-solid-svg-icons';

function Form (props) {
    
    const wrapperStyle = {
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(163, 161, 161, 0.7)",
        zIndex: "10",
        position: "fixed"
    }

    const addIcon = <FontAwesomeIcon icon={faPlusCircle} size="4x"/>;
    const closeIcon = <FontAwesomeIcon icon={faXmark} size="3x"/>;

    wrapperStyle["display"] = props.hidden;
    
    return (
        <div style={wrapperStyle}>

            <form className={props.formClassName}>

            <Button 
                onClick={props.handleSubmit}
                className="group-form-close-btn" 
                icon={closeIcon} />
                
                <Label 
                htmlFor="groupNameInput"
                text="Group Name"
                className="group-form-label"
                />

                <Input 
                id="groupNameInput"
                type="text" 
                placeholder="Your new group name goes here!"
                className="form-input"   
                />

                <Label 
                htmlFor="groupColourPicker"
                text="Colour"
                className="group-form-label"
                />

                <Input 
                id="groupColourPicker"
                type="color" 
                placeholder="Your new group name goes here!"
                className="form-input"
                value="#B0DAFF"   
                />

                <Button 
                onClick={props.handleSubmit}
                className="group-form-btn" 
                icon={addIcon} />

            </form>
        </div>
        
    )
}

export default Form