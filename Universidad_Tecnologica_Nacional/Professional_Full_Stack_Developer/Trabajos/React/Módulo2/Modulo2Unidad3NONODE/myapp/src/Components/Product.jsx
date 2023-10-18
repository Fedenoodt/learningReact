import { useEffect } from "react"

function Product({ title, price }) {
    return (
      <div>
        <h2>{title}</h2>
        <p>Precio: ${price}</p>
      </div>
    );
}

export default Product