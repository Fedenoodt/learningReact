import { Component } from "react";
import Arg from "../img/arg.svg";
import Usa from "../img/usa.svg";


class Equipo extends Component {
  render() {
    return (
      <div className='tablero_cabecera'>
          <h3> {this.props.tipo} {this.props.contador} <img className='img_sel' src={this.props.bandera} alt="" /></h3>
      </div>
    )
  }
}

export default Equipo;