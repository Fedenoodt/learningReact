import { Component } from "react";
import { Link } from "react-router-dom";
class Register extends Component {
    render () {
        function registrado () {
            alert('¡Bienvenido! Ya estàs registrado en el sistema.');
        };
    
    return (<>
    <div>
        <form action="/login">
            <label>Nombre</label>
            <input type="text" placeholder="Nombre"></input>
            <br />
            <label>Contraseña</label>
            <input type="text" placeholder="Contraseña"></input>
            <br />
            <label>Repetir Contraseña</label>
            <input type="text" placeholder="Misma Contraseña"></input>
            <br />
            <button onClick={registrado}>Ingresar</button>
        </form>
        <br />
        <span>¿Ya estàs registrado? <Link to="/login">Inicia sesion</Link>.</span>
    </div>
    </>)
}}
export default Register