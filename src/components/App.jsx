import React, {useState} from "react";
import ThoughtBubble from "./Thought/ThoughtBubble.jsx";
import ThoughtCloud from "./Thought/ThoughtCloud.jsx";
import GroupViewTaskBar from "./TaskBar/GroupViewTaskBar.jsx";
import Form from "./General/Form.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";




function App() {

  const [thoughtClouds, setThoughtClouds] = useState([]);

  function generateThoughtCloudCss () {

    var inlineStyle = {
      display: "grid",
      placeItems: "center",
      position: "relative",
      width:"350px",
      height:"130px",
      boxShadow: "10px 10px rgba(0,0,0,0.2)",
      borderRadius: "100px",
      background:"whitesmoke",
      margin: "50px",
      animationName: "floatLeftToRight",
      animationIterationCount: "infinite",
      animationDuration: Math.floor((Math.random() * 10) + 5) + "s",
      animationTimingFunction: "cubic-bezier(0, 0.74, 1, 0.4)"
    }
    
    return inlineStyle
  }

  function addCloud (newThought) {
    setThoughtClouds([
      ...thoughtClouds, 
      {
        thought: newThought, 
        style: generateThoughtCloudCss()
      }
    ])
  }



  return (
   <div>
  

  <ThoughtBubble addCloud={addCloud} />

  <div className="grid-wrapper">
  
  {
    thoughtClouds.map((cloud, index) => {
      const displayText = cloud.thought.length >= 123 ? cloud.thought.slice(0, 117) + " . . ." : cloud.thought; 
    return ( 
      <ThoughtCloud id={index} style={cloud.style} thoughtText={displayText}/> 
    )
  })}
  </div>

  <GroupViewTaskBar />

 

  </div> 
  )
}

export default App;
