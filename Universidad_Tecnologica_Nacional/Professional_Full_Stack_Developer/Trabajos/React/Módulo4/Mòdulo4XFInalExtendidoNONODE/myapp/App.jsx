import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login'
import Register from './Pages/Register'
import DeclaringProduct from './Pages/DeclaringProduct.jsx'
import FireProduct from './Pages/FireProduct.jsx'
import FireProducts from './Pages/FireProducts.jsx'
import FireproductsMod from './Pages/FireproductsMod.jsx'


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/register' element={ <Register />} />
        <Route path='/products/firebase/:id' element={ <FireProduct />} />
        <Route path='/products/firebase/MOD/:id' element={ <FireproductsMod />} />
        <Route path='/products/firebase' element={ <FireProducts />} />
        <Route path='/products/create' element={ <DeclaringProduct />} />
      </Routes>
    </Router>
  )
}

export default App
