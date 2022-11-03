import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SimpleMap from './components/SimpleMap';

function App() {
  console.log("APP COMPONENT")
  return (
    <div className="App">
      <h2> Hello </h2>
      <SimpleMap/>
    </div>
  );
}

export default App;
