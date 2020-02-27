import React, { useState } from "react";

function UserInput({ addToBasket }) {
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  function resetInput() {
    setInput("");
  }

  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault();
          addToBasket(input);
          resetInput();
        }}
      >
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Add more food to basket"
        />
      </form>
    </div>
  );
}

export default UserInput;
