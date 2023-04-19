import React, {useState} from "react";
import Button from "../General/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Form from "../General/Form";
import Group from "./Group";
import { name } from "ejs";

function GroupViewTaskBar () {

    const iconUp = <FontAwesomeIcon icon={faChevronUp} fade size="3x" style={{animationDuration: "2.5s"}}/>;
    const iconDown = <FontAwesomeIcon icon={faChevronDown} size="3x" style={{opacity: "0.5"}}/>;

    const iconAdd = <FontAwesomeIcon icon={faPlus} size="2xl" style={{color: "whitesmoke"}}/>;

    const [visibility, setVisibility] = useState(null);

    function toggleVisibility () {
        
        setVisibility(!visibility)
    }

    function setStyle () {
        if (visibility === null) {
            return 
        } else if (visibility === true) {
            return {
                bottom: "0px",
                animationName: "taskbarUp",
            } 
        } else if (visibility === false) {
            return {
                bottom: "-100px",
                animationName: "taskbarDown",
            }
        }
    }


    const [hideForm, setHideForm] = useState("none");

    function toggleFormVisibility () {
        if (hideForm === "none") {
            setHideForm("")
        } else {
            setHideForm("none")
        }
    }

    function addGroup () {
        toggleFormVisibility()
    }

    const [groups, setGroups] = useState([]);

    function createNewGroup() {
        
        const groupObj = {
            name: groupName,
            colour: groupColour
        }

        setGroups([...groups, groupObj])

        console.log(groups)
    }

    function deleteGroup () {

    }

    function handleSubmit (event) {
        event.preventDefault()
        toggleFormVisibility()
        createNewGroup()
    }

    function handleClose (event) {
        event.preventDefault();
        toggleFormVisibility();
    }

    const [groupName, setGroupName] = useState("");
    const [groupColour, setGroupColour] = useState("#000000");

    function handleInputChange (event) {
        if (event.target.id === "groupNameInput") {
            setGroupName(event.target.value)
        } else if (event.target.id === "groupColourPicker") {
            setGroupColour(event.target.value)
        }
    }

    return (
        <div>

        <Form 
        formClassName="new-group-form" 
        hidden={hideForm} handleSubmit={handleSubmit} 
        handleClose={handleClose} 
        handleInputChange={handleInputChange}/>
        
            <div className="group-view-task-bar" style={setStyle()}>

                <Button 
                onClick={toggleVisibility} 
                className="task-bar-toggle-btn" 
                icon={!visibility ? iconUp : iconDown}/>

                <Button 
                onClick={addGroup} 
                className="group-add-button" 
                icon={iconAdd}/>

            </div>
        </div>
    )
}

export default GroupViewTaskBar;