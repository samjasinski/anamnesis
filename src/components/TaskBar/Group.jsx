import React from "react";

function Group (props) {
    return (
        <div className="group" id={props.index}>
            {props.name}
            {props.colour}
        </div>
    )
}

export default Group;