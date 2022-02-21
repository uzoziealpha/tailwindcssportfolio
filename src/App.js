import './App.css';
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from './pages/Projects';
import {BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>

       </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
