import React from "react"
import "./Contador.css"
class Contador extends React.Component {
    state = {
        Contador : 0
    }
    render () {
        const {id, color} = this.props
        const {Contador} = this.state
        return (
            <div className="Contador">
                <div className="jumbotron" style={{background: color}}>
                    <h3>Contador Nro {id} </h3>
                    <hr/>
                    <h4 className="alert alert-info">Valor: {Contador}</h4>
                    <button className="btn btn-success">Incrementar</button>

                </div>
            </div>
        )
    }
}
export default Contador