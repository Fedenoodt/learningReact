import { useEffect } from "react"
import { Link } from "react-router-dom";

function Product({ title, price, id }) {
  useEffect(() => {}, []);
  useEffect(() => {}, [title, price]);
    return (
      <div>
        <h2>{title}</h2>
        <p>Precio: ${price}</p>
        <button ><Link to={`/products/${id}`}>Ver detalles</Link></button>
      </div>
    );
}

export default Product;