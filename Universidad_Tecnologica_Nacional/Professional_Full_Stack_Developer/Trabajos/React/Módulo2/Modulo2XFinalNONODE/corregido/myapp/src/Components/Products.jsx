import { useEffect, useState } from "react"
import Product from './Product.jsx'

function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=pantalones-cargo&limit=5')
        .then((data) => data.json())
        .then(data=>
            setProducts(data.results)
            )
        .catch((fail) => console.log(fail))
    }, [])
    return <div>
    {products.map((product) => (
      <Product
        id={product.id}
        title={product.title}
        price={product.price}
      />
    ))}
  </div>
}



export default Products