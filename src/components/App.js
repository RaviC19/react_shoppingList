import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import UserInput from "./UserInput";
import DeleteItem from "./DeleteItem";

function App() {
  const data = [
    { id: 1, item: "Chicken" },
    { id: 2, item: "Protein Powder" },
    { id: 3, item: "Milk" },
    { id: 4, item: "Cookies" }
  ];

  const [basket, setBasket] = useState(data);

  const addToBasket = newFood => {
    setBasket([...basket, { id: 5, item: newFood }]);
  };

  function deleteButton() {
    setBasket([]);
  }

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <UserInput addToBasket={addToBasket} />
      <ShoppingList basket={basket} />
      <DeleteItem deleteButton={deleteButton} />
    </div>
  );
}

export default App;

//Want the add item to list button to take in the user input and add it to the array in ShoppingList.js

//Want to be able to click on an item in the list to delete something from it (like the to do list from previous)
