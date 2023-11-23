import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { create } from "../Components/CreateUser";
import IsoLogo from "../Services/IsoLogo.jsx"
function Register () {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        try {
            const user = await create(data);
            alert('Se ha registrado exitosamente.');
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
            <label>Nombre</label>
            <input 
            type="text" 
            placeholder="Nombre"
            {...register('nombre')} />
            <br />
            <label>Apellido</label>
            <input 
            type="text" 
            placeholder="Apellido"
            {...register('apellido')} />
            <br />
            <label>Correo Electrónico</label>
            <input 
            type="email" 
            placeholder="example@mail"
            {...register('email')} />
            <br />
            <label>Contraseña</label>
            <input 
            type="password" 
            placeholder="Contraseña"
            {...register('password')} />
            <br />
            <button type="submit"><Link to='/login'>Ingresar</Link></button>
        </form>
        <br />
        <span>¿Ya estàs registrado? <Link to="/login">Inicia sesion</Link>.</span>
    </div>
    </>)
}
export default Register