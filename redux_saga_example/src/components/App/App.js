import React from "react";
import { useDispatch } from "react-redux";
import { loadData } from "../../store/actions";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div style={{textAlign: "center"}}>
      <header id="header" style={{textAlign: "center"}}>
        <p>
          Use Redux saga!!!
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React.
        </a>
      </header>

      <button onClick={() => dispatch(loadData())}>Click to fetch data</button>
    </div>
  );
};

export default App;
