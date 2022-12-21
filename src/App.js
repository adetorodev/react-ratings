// import logo from './logo.svg';
import "./App.css";
import StartRatings from "./components/StartRatings";
import ColorData from "./color-data";
import ColorList from "./components/ColorList";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState(ColorData);
  return (
    <ColorList
      colors={colors}
      onRateColor={(id, rating) => {
        const newColors = colors.map((color) =>
          color.id === id ? { ...color, rating } : color
        );
        setColors(newColors);
      }}
      onRemoveColor={(id) => {
        const newColors = colors.filter((color) => color.id !== id);
        setColors(newColors);
      }}
    />
    // <div className="App">
    //   <StartRatings style={{backgroundColor: "lightblue"}} onDoubleClick={e=> alert("double Click")}/>
    //  </div>
  );
}

export default App;
