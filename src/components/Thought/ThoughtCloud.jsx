import React from "react";

function ThoughtCloud (props) {
    return (
        
        <div className="thought-cloud" id={props.id} style={props.style}>{props.thoughtText}</div>
        
    )
}

export default ThoughtCloud;