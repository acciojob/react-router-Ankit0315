import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';

function App() {
  return (
   <div>
    <ul>
      <li>
        <a href='/'>Home</a>
      </li>
      <li>
        <a href='About'>About</a>
      </li>
    </ul>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
    </Routes>
    </BrowserRouter>
  
   </div> 
     
  )
}

export default App;
