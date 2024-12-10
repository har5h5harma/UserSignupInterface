import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from "./components/Signup";
import Login from './components/login'; 
import Main from './components/main';


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Main' element={<Main/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
