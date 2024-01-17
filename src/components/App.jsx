import React, { useState } from "react";

function App() {
  const [inputText, setinput] = useState("");
  const [itemArray, setArray] = useState([]);

  function handleChange(event) {
    const newVal = event.target.value;
    setinput(newVal);
  }

  function handleClick() {
    setArray((prevVal) => [...prevVal, inputText]);
    setinput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemArray.map((noteitem) => (
            <li>{noteitem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
