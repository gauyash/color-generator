import { useState, useEffect } from "react";
import "./App.css";
import { ColorContainer } from "./ColorContainer";
import Values from "values.js";
import { DialogBox } from "./DialogBox";

function App() {
  const [colorValue, setColorValue] = useState("#000");
  const [color, setColor] = useState([]);
  const [dialog, setDialog] = useState(false);

  useEffect(() => {
    generateColors(colorValue);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    generateColors(colorValue);
  }

  function generateColors(value) {
    try {
      const colorValues = new Values(value).all(10);
      setColor(colorValues);
      console.log(colorValues);
    } catch (error) {
      setDialog(true);
    }
  }

  function close(){
    setDialog(false);
  }

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="d-flex align-items-center gap-4 py-5"
      >
        <label htmlFor="color">
          <h2>Color Generator</h2>
        </label>

        <div className="btn-box d-flex">
          <input
            onChange={(event) => {
              setColorValue(event.target.value);
            }}
            type="color"
            name=""
            id="colorPick"
            value={colorValue}
          />
          <input
            value={colorValue}
            onChange={(event) => {
              setColorValue(event.target.value);
            }}
            type="text"
            id="color"
          />
          <button
            style={{
              backgroundColor: colorValue,
              color: colorValue === "#ffffff" ? "black" : "white",
            }}
            className="border-0 px-3"
          >
            Generate
          </button>
        </div>
      </form>
      <ColorContainer color={color} />
      {dialog && <DialogBox close={close} />}

    </div>
  );
}

export default App;
