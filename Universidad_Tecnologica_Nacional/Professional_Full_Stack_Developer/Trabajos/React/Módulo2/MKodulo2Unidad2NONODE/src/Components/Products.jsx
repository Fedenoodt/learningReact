import { useEffect, useState } from "react"
import Product from '../pages/Product.jsx'

function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=starwars&limit=5')
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
    <button >Ver detalle</button>
  </div>
}



export default Products