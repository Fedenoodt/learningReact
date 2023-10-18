function DataDetails({ title, price, sold_quantity, available_quantity, city_name, state_name }) {
    return (
      <div>
        <h2>{title}</h2>
        <p>Precio: ${price}</p>
        <p>Cantidad vendido: {sold_quantity}</p>
        <p>Cantidad disponibles: {available_quantity}</p>
        <p>Localidad del vendedor: {city_name}</p>
        <p>Ciudad del vendedor: {state_name}</p>
      </div>
    );
}

export default DataDetails