import React, { Component } from 'react'
import Equipo from './components/Equipo';
import Arg from "./img/arg.svg";
import Usa from "./img/usa.svg";

class Tablero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      local: 0,
      visitante: 0,
      cont: 0
    }
  }

  render () {
    return (
      <>
        <h4>{this.props.children}</h4>
        <div className='tablero_grupo'>
          <div className='contenedor_local'>
            <Equipo tipo={'Local:'} contador= {this.state.local} bandera={ Arg } />
            <button className='btn_inc' onClick={() => this.setState( {local: this.state.local +1} )}>+ 1</button>
            <button className='btn_inc' onClick={() => this.setState( {local: this.state.local +2} )}>+ 2</button>
            <button className='btn_inc' onClick={() => this.setState( {local: this.state.local +3} )}>+ 3</button>
            <button className='btn_dec' onClick={() => this.setState( {local: this.state.local -1} )}>- 1</button>
            <button className='btn_dec' onClick={() => this.setState( {local: this.state.local -2} )}>- 2</button>
            <button className='btn_dec' onClick={() => this.setState( {local: this.state.local -3} )}>- 3</button>
          </div>
          <div className='contenedor_visitante'>
            <Equipo tipo={'Visitante:'} contador= {this.state.visitante} bandera={ Usa } />

            <button className='btn_inc' onClick={() => this.setState( {visitante: this.state.visitante +1} )}>+ 1</button>
            <button className='btn_inc' onClick={() => this.setState( {visitante: this.state.visitante +2} )}>+ 2</button>
            <button className='btn_inc' onClick={() => this.setState( {visitante: this.state.visitante +3} )}>+ 3</button>
            <button className='btn_dec' onClick={() => this.setState( {visitante: this.state.visitante -1} )}>- 1</button>
            <button className='btn_dec' onClick={() => this.setState( {visitante: this.state.visitante -2} )}>- 2</button>
            <button className='btn_dec' onClick={() => this.setState( {visitante: this.state.visitante -3} )}>- 3</button>
          </div>
        </div>
        <button onClick={() => this.setState( {local: 0, visitante: 0} )}>Reiniciar tablero</button>
      </>
    )
  }
}

export default Tablero;