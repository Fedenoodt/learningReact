import { Link } from "react-router-dom";
import Products from "../Components/Products.jsx";

function Home() {
  return (
    <div>
      <div>
        <button>
          <Link to="/login">Ingresar</Link>
        </button>
        <button>
          <Link to="/register">Registrarse</Link>
        </button>
      </div>
      <Products />
    </div>
  );
}

export default Home;
