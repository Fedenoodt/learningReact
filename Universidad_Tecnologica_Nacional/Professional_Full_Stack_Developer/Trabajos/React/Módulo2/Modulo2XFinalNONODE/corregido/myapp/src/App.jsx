import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Details from './pages/Details'
import Login from './Components/Login'
import Register from './Components/Register'
import Products from './Components/Products'


function App() {

  return (
    <Router>
      
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/details' element={ <Details />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/register' element={ <Register />} />
        <Route path='/products' element={ <Products />} />
        <Route path='/products/:id' element={ <Details />} />
      </Routes>
    </Router>
  )
}

export default App
