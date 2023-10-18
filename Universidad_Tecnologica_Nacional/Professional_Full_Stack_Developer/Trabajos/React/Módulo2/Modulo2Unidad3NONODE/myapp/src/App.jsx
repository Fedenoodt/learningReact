import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Products from './Components/Products'
import Details from './Components/Details'


function App() {

  return (
    <Router>
      <Home />
      <Routes>
        <Route path='/' element={ <Products />} />
        <Route path='/details' element={ <Details />} />
        
      </Routes>
    </Router>
  )
}


export default App
