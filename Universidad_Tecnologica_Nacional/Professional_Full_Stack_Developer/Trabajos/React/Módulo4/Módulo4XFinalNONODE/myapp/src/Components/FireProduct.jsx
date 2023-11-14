import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getDocById } from "../Services/ServiceProduct.jsx";
import IsoLogo from "../Services/IsoLogo.jsx"

function comprar() {
  alert('Felicidades por su compra.')
}

function FireProduct() {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const { formState: { errors } } = useForm();
    useEffect(() => {
        const request = async () => {
            try {
                const response = await getDocById(id);
                setProducts(response.data())
            } catch (e) {console.log(e)}
        };
        request();
}, [id]);
    return (
      <div>
      <IsoLogo />
      <div><h2> {products.nombre} </h2></div>
      <div><h3>Precio: </h3>AR$ {products.precio} </div>
      <div><h3>Identificación SKU: </h3> {products.sku} </div>
      <div><h3>Más detalles: </h3> {products.descripcion} </div>
      <div><button> <Link to={`/products/firebase`}>Ocultar detalles</Link></button></div>
      <div><button className="buy" onClick={comprar}>Comprar</button></div>
    </div>
  );
}

export default FireProduct;
