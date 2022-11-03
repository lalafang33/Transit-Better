import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DirectionForm from './components/DirectionForm';
import la_center from './const/la_center';
import SimpleMap from './components/SimpleMap';

import CurrentLocation from './components/CurrentLocation';



function App() {
  console.log("APP COMPONENT")
  return (
    <div className="App">
      <h2> Hello </h2>
      <CurrentLocation/>
      <SimpleMap/>
      
       <DirectionForm/>

    </div>
  );
}

export default App;
