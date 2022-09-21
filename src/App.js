import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router';
import Main from './view/Main';
import Todoinput from './component/Todoinput';

const App=()=>{
  return(
    <Routes>
      <Route path="/" element = {<Main/>}/>
      <Route path="/create" element={<Todoinput/>}/>
      <Route path="/update/:id" element={<Todoinput/>}/>  
    </Routes>
  )
}

export default App;
