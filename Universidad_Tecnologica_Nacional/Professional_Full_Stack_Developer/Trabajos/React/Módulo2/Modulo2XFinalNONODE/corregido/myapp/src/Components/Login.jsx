import { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
    render () {
        function ingreso () {
            alert('¡Bienvenido!');
        };
    
    return (<>
    <div>
        <form action="/products">
            <label>Nombre</label>
            <input type="text" placeholder="Nombre"></input>
            <br />
            <label>Contraseña</label>
            <input type="text" placeholder="Contraseña"></input>
            <br />
            <button onClick={ingreso}>Ingresar</button>
        </form>
        <br />
        <span>¿No eres usuario frecuente? <Link to="/register">Registrate</Link>.</span>
    </div>
    </>)
}}

export default Login