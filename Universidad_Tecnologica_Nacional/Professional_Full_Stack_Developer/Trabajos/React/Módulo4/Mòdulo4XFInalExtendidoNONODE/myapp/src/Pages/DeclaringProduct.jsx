import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { createProduct } from '../Services/Service.jsx'
import IsoLogo from "../Services/IsoLogo.jsx"
function DeclaringProduct () {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        try {
            const product = await createProduct(data);
            alert('Su producto fue cargado exitosamente.');
        }
        catch (e) {
            console.log(e)
            alert('Ha ocurrido un error. Por favor, intente nuevamente.');
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
export default DeclaringProduct