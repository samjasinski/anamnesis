import React from "react";

function Group (props) {

    const style = {
        backgroundColor: props.colour
    }

    return (
        <div className="group" style={style}>
           <p className="group-text">
           
            </p>
        </div>
    )
}

export default Group;