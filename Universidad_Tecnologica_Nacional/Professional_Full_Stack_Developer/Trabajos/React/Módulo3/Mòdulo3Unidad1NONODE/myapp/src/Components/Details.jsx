import { useState, useEffect } from "react";
import DataDetails from './DataDetails.jsx'
import { Link } from "react-router-dom";

function Details () {
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
        <DataDetails
          title={product.title}
          price={product.price}
          sold_quantity={product.sold_quantity}
          available_quantity={product.available_quantity}
          city_name={product.address.city_name}
          state_name={product.address.state_name}
        />
      ))}
      <button ><Link to="/">Ocultar detalles</Link></button>
    </div>  
    /*return<>details</>*/
  }
  export default Details