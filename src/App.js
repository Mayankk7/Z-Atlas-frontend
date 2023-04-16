import './App.css';
import Landing from './components/Landing';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./components/Home";
import HomeScreen from './screen/HomeScreen';
import ResultScreen from './screen/ResultScreen';
import { useState } from 'react';
function App() {
   const [data,setData] = useState();
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<HomeScreen setData={setData}/>}/>
        <Route path="/result" element={<ResultScreen data={data}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
