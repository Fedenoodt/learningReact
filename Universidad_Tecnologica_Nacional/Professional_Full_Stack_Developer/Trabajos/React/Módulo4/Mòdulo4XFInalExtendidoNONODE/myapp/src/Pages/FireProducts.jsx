import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import comprar from "../Pages/FireProduct.jsx";
import { deleteProduct, getting } from '../Services/Service';
import IsoLogo from "../Services/IsoLogo.jsx"

function FireProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const request = async () => {
      try {
        const response = await getting('productos')
        console.log('usuarios:', getting('usuarios').docs)
        setProducts(response.docs)
      }
      catch (e) {
        console.error('Error del request.')
        console.log(e)
      }
    };
    request();
  }, []);
  return (
    <div>
      <IsoLogo />
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
        {products.map((product) => (
        <tr key={product.id}>
        <td>{product.data().nombre}</td>
        <td>AR$ {product.data().precio}</td>
        <td><button> <Link to={`/products/firebase/${product.id}`}>Ver detalles</Link></button></td>
        <td><button className="modify"><Link to={`/products/firebase/MOD/${product.id}`}>Editar producto</Link></button></td>
        <td><button className="delete" onClick={()=>{deleteProduct(product.id)}}>Borrar producto</button></td>
        </tr>
    ))}
        </tbody>
      </table>
      <button><Link to='/products/create'>Crear Producto</Link></button>
    </div>);
}

export default FireProducts