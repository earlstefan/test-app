import "./App.css";
import ColorDisplay from "./components/ColorDisplay";
import ColorInput from "./components/ColorInput";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <ColorDisplay toChildColor={color} />
      <ColorInput toChildColor={color} toParentColor={setColor} />
    </>
  );
}

export default App;
