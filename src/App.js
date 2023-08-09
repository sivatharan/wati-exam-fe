import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [num1, setNum1] = useState();
   const [num2, setNum2] = useState();

  const handleSubmit = (event) => {
     event.preventDefault();
     fetch(`http://localhost:3000/add`,{method: 'POST', body: {num1, num2}})
     .then((response) => console.log(response));
     console.info(num1, num2)
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Enter Number 1:
          <input
            type="text"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </label>
        <br/>
         <label>
          Enter Number 2:
          <input
            type="text"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </label>
        <br/>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
