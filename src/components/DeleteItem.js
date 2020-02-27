import React from "react";

function DeleteItem({ deleteButton }) {
  return (
    <div>
      <button onClick={deleteButton}>
        Click to remove everything from the list
      </button>
    </div>
  );
}

export default DeleteItem;
