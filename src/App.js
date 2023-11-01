import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Task from './Pages/Tasks/task';
import Profile from './Pages/Profiles/profile';
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path="/" element={<Task/>}/>
      <Route path="/profile" element={<Profile/>}/>
     </Routes>
    </div>
  );
}

export default App;
