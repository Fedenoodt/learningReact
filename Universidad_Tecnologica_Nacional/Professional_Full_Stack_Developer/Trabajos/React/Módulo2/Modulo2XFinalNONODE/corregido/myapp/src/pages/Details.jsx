// Importaciones de React Hooks
import { useState, useEffect } from "react";

// Importaciones librerías terceros
import { useParams, Link } from "react-router-dom";

function Details() {
  /*
    función de gancho (hook) que se utiliza acceder a los parámetros dinámicos
    definidos en la ruta de una página, para ello se va a requerir crear una nueva ruta
    en el archivo App.jsx.
  */
  const { id } = useParams();

  /* Estado del producto que se inicializa como un objeto vacío */
  const [product, setProduct] = useState({});

  /* Función secundaria que se va ejecutar cuando haya un cambio en la dependencia "id", esto porque se
    le proporciona el id en el array de dependencia */
  useEffect(() => {
    // 1. Realiza una solicitud a la API de MercadoLibre para obtener detalles un producto
    fetch(`https://api.mercadolibre.com/items/${id}`)
      // 2. Cuando se reciba una respuesta exitosa (una respuesta HTTP 200),
      //se convierte la respuesta en un objeto JSON.
      .then((data) => data.json())
      // 3. Cuando se haya convertido la respuesta en JSON (los datos del producto),
      //    se procede a trabajar con esos datos. Se actualiza el estado
      //'producto' con los datos del producto obtenidos.
      .then((data) => setProduct(data))
      // 6. En caso de que ocurra un error en la solicitud a la API, se captura y se maneja aquí abajo.
      .catch((fail) => console.log(fail));
  }, [id]); //array de dependencia, si por algún motivo cambia el id, se volverá a ejecutar la función useEffect con la nueva petición

  return (
    <div>
      <h2>{product.title}</h2>
      <p>Precio ${product.price}</p>
      <p>Cantidad vendidos: {product.sold_quantity}</p>
      <p>Cantidad disponible: {product.available_quantity}</p>
      <button><Link to="/products">Ocultar detalles</Link></button>
    </div>
  );
}

export default Details;
