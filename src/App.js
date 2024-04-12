import React, { useState, useEffect } from "react";
import ToDo from "./components/ToDo";
import "./index.css";
import { addToDo, getToDo, updateToDo, deleteToDo } from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [updating, setUpdating] = useState(null); // Change to null for initial state

  useEffect(() => {
    // Fetch todos on component mount
    getToDo(setToDo);
  }, []);

  const handleAddOrUpdate = () => {
    if (updating) {
      // Update existing todo
      updateToDo(updating, text, setToDo, setText, setUpdating);
    } else {
      // Add new todo
      addToDo(text, setText, setToDo);
    }
  };

  const updateMode = (id, text) => {
    setText(text);
    setUpdating(id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>
        <form className="top" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Enter the items"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <button className="add" onClick={handleAddOrUpdate}>
            {updating ? "Update" : "Add"}
          </button>
        </form>
        <div className="todo-list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={() => deleteToDo(item._id, setToDo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
