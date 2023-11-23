import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getDocById } from "../Services/Service.jsx";
import { updating } from "../Services/Service.jsx";
import IsoLogo from "../Services/IsoLogo.jsx";
function FireproductsMod () {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const request = async () => {
            try {
                const response = await getDocById(id);
                setValue("nombre", response.data().nombre)
                setValue("precio", response.data().precio)
                setValue("sku", response.data().sku)
                setValue("descripcion", response.data().descripcion)
                setProducts(response.data());
            } catch (e) {console.log(e)}
        };
        request();
}, [id]);
    
const onSubmit = async (data) => {
    try {
        const product = await updating(id, data);
        console.log(product)
    }
    catch (e) {
        console.log(e)
    }        
};

return (<>
<div>
    <IsoLogo />
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre del producto</label>
        <input 
        type="text" 
        placeholder="Nombre"
        {...register('nombre')} />
        <br />
        <label>Precio del producto</label>
        <input 
        type="text" 
        placeholder="Precio"
        {...register('precio')} />
        <br />
        <label>SKU</label>
        <input 
        type="text" 
        placeholder="SKU"
        {...register('sku')} />
        <br />
        <label>Descripción</label>
        <textarea cols={50} rows={7}
        placeholder="Descripción"
        {...register('descripcion')} />
        <br />
        <button type="submit">Cargar producto</button>
        <br />
        <span><Link to='/products/firebase'>Volver</Link></span>
    </form>
</div>
</>)
}

export default FireproductsMod