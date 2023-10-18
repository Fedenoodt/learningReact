import React, { Component } from "react";

function Writer(props) {
    return <div>
        <label type="text"> {props.lbl} </label>
        <input type="text" placeholder={ props.phd }></input>
    </div>
}

class Fields extends Component {
    render () {
        return(
            <div>
                <Writer lbl="Ingrese su Nombre" phd="Me llamo..."/>
                <Writer lbl="Ingrese su Apellido" phd="Me Apellido..."/>
                <Writer lbl="ngrese su Correo" phd="example@mail"/>
                <Writer lbl="Ingrese su Teléfono" phd="Número de 10 caracteres..."/>
                <Writer lbl="Ingrese su Contraseña" phd="De entre 8 y 16 dígitos..."/>
                <Writer lbl="Confirme su Contraseña" phd="Debe ser igual a la anterior..."/>
                <button type="submit">Enviar</button>
            </div>
        );
    }
}

export default Fields