import React, { useState } from "react";

function ThoughtBubble(props) {
  const [thought, setThought] = useState("");

  function handleSubmit(event) {
    setThought(prevState =>{
      props.addCloud(prevState) 
    });
    event.preventDefault();
    setThought("")
  }

  function handleChange(event) {
    setThought(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input
            placeholder=""
            className="thought-input"
            type="text"
            value={thought}
            onChange={handleChange}
          />
      </form>
    </div>
  );
}

export default ThoughtBubble;
