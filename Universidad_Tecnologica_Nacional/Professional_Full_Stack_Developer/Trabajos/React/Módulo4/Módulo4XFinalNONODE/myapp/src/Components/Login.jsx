import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { login } from "./CreateUser";
import  IsoLogo  from "../Services/IsoLogo"

function Login () {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        try {
            const userId = await login(data?.email, data?.password);
            console.log(userId)
        }
        catch (e) {
            console.log(e)
        }        
    };
    
    return (<>
    <div>
        <IsoLogo />
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <button type="submit"><Link to='/products/firebase'>Iniciar Sesión</Link></button>
        </form>
        <br />
        <span>¿No eres usuario frecuente? <Link to="/register">Registrate</Link>.</span>
    </div>
    </>)
}
export default Login