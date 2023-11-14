import { Link } from "react-router-dom";
import Products from "../Components/Products.jsx"
import firebase from "../Services/Firebase.js";
import IsoLogo from "../Services/IsoLogo.jsx"

function Home () {
    <Products />
    console.log('firebase:', firebase)
    return <div>
    <IsoLogo />
      
        <div>
          <br />
          <button><Link to='/login'>Ingresar</Link></button>
          <button><Link to='/register'>Registrarse</Link></button>
          
          </div>
  </div>
}

export default Home