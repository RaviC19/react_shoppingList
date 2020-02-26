import React, { useState } from "react";

function UserInput() {
  const [input, setInput] = useState("");
  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <div>
      <input value={input} onChange={handleChange} />
      <ol>
        <button onClick={input}>Add item to list</button>
      </ol>
    </div>
  );
}

export default UserInput;
