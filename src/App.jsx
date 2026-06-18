import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import AddProduct from './pages/AddProduct'

function App() { 

  return (
    <> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/addproduct' element={<AddProduct/>} />
      </Routes> 
    </>
  )
}

export default App
