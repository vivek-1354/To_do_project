import { useState } from "react";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState([]);
  const [value, setValue] = useState();

  const handleAdding = (e) => {
    e.preventDefault();
    if (!value) { return };
    const updatedTodo = [...toDos, value];
    setToDos(updatedTodo);
    setValue("");
  };

  const handleDelete = (e) => {
    const updatedTodos = toDos.filter(todo => todo !== e.target.value)
    setToDos(updatedTodos)
  }
  return (
    <div className="App">
      <h2 className="heading">Your Todos</h2>
      <hr />
      <div className="Todo">
        <form onSubmit={handleAdding}>
          <input type="text"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter Your Todo..."
            value={value} />
          <button type="submit" >Add</button>
        </form>
      </div>
      {toDos.length > 0
        ? toDos.map((tdo) => {
          return (
            <div className="all-todos">
              <h4>{tdo}</h4>
              <button className="delete" onClick={(e) => { handleDelete(e) }} value={tdo}>X</button>
            </div>
          );
        })
        : ""}
      {/* </div>\ */}
    </div>
  );
}

export default App;
