import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import { Route, Routes } from 'react-router-dom'
import Volunteer from './Components/Volunteer/Volunteer'

function App() {

  return (
    <>
  
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/volunteer' element={<Volunteer/>}/>
      </Routes>
   
    </>
  )
}

export default App
