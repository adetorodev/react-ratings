// import logo from './logo.svg';
import './App.css';
import StartRatings from './components/StartRatings';
import ColorData from './color-data'
import ColorList from './components/ColorList'
import { useState } from 'react';

function App() {
  // const [colors] = useState(ColorData)
  return (
    // <ColorList colors={colors} />
    <div className="App">
      <StartRatings style={{backgroundColor: "lightblue"}} onDoubleClick={e=> alert("double Click")}/>
     </div>
  );
}

export default App;
