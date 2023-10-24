/* desestructurar id que llega para utilizar en el botón */
function Product({ title, price }) {
    return (
      <div>
        <h2>{title}</h2>
        <p>Precio: ${price}</p>
        {/* Implementar botón */}
      </div>
    );
}

export default Product
