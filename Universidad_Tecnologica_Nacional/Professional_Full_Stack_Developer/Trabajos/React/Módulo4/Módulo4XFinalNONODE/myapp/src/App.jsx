import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home.jsx'
import Details from './Pages/Details'
import Login from './Components/Login'
import Register from './Components/Register'
import Products from './Components/Products'
import DeclaringProduct from './Components/DeclaringProduct.jsx'
import FireProduct from './Components/FireProduct.jsx'
import FireProducts from './Pages/FireProducts.jsx'
import FireproductsMod from './Components/FireproductsMod.jsx'


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/details' element={ <Details />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/register' element={ <Register />} />
        <Route path='/products' element={ <Products />} />
        <Route path='/products/firebase/:id' element={ <FireProduct />} />
        <Route path='/products/firebase/MOD/:id' element={ <FireproductsMod />} />
        <Route path='/products/firebase' element={ <FireProducts />} />
        <Route path='/products/create' element={ <DeclaringProduct />} />
        <Route path='/products/:id' element={ <Details />} />
      </Routes>
    </Router>
  )
}

export default App
