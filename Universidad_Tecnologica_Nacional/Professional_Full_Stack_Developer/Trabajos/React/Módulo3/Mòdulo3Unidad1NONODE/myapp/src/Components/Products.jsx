import { useEffect, useState } from "react"
import Product from './Product.jsx'
import { Link } from "react-router-dom";

function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=remeras&limit=3')
        .then((data) => data.json())
        .then(data=>
            setProducts(data.results)
            )
        .catch((fail) => console.log(fail))
    }, [])
    return <div>
    {products.map((product) => (
      <Product
        title={product.title}
        price={product.price}
      />
    ))}
    <button ><Link to="/details">Ver detalles</Link></button>
  </div>
}



export default Products