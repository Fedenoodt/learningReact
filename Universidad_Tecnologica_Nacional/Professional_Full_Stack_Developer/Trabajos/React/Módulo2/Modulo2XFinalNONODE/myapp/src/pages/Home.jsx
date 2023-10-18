import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Product from "../Components/Product.jsx"

function Home () {
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
        <div><button><Link to='/login'>Ingresar</Link></button><button><Link to='/register'>Registrarse</Link></button></div>
    {products.map((product) => (
      <Product
        title={product.title}
        price={product.price}
      />
    ))}
    <button ><Link to="/details">Ver detalles</Link></button>
  </div>
}

export default Home