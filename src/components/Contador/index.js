import React, { Component } from 'react';

class Contador extends Component {

  state = {
    contador: 1
  }

  aumentaNumero = () => {
    this.setState({ contador: this.state.contador + 1 })
  }

  render() {
    return (
      <div>
        <p>{this.state.contador}</p>

        {
          this.state.contador > 5 ?
            <p>Maior do que 5</p> :
            <p>Menor do que 5</p>
        }

        {this.state.contador > 10 && <p>Número maior do que 10</p>}

        <button onClick={this.aumentaNumero}>Aumenta número</button>
      </div>
    );
  }
}

export default Contador