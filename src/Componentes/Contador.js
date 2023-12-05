import React from "react"
import "./Contador.css"
class Contador extends React.Component {

    constructor(props) {
        super(props)
        console.log('constructor Contador')

        this.state = {
            //Contador : 0
            Contador: props.ini
        }

        /* this.Incrementar = this.Incrementar.bind(this) */

    }

    /*state = {
        //Contador : 0
        Contador: this.props.ini
    }*/

    Incrementar() {
        /* Incrementar = () => { */
        const {id} = this.props
        console.log('Incrementar: ' + id)
        
        this.setState(prevstate => ({Contador: prevstate.Contador + 1}))
    }

    render () {
        const {id, color} = this.props
        const {Contador} = this.state

        console.log('render contador', id)
        
        return (
            <div className="Contador">
                <div className="jumbotron" style={{background: color}}>
                    <h3>Contador Nro {id} </h3>
                    <hr/>
                    <h4 className="alert alert-info">Valor: {Contador}</h4>


                    <button className="btn btn-success" onClick={
                        () => this.Incrementar()
                        /* this.Incrementar */
                        /* (function() {this.Incrementar()}).bind(this) */
                    }>Incrementar</button>

                </div>
            </div>
        )
    }
}
export default Contador