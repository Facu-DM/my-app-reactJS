import React from "react"
import "./Contador.css"
class Contador extends React.Component {

    constructor(props) {
        super(props)
        console.log('constructor Contador')

        /*this.state = {
            //Contador : 0
            Contador: props.ini
        }*/

        /* this.Incrementar = this.Incrementar.bind(this) */

    }

    state = {
        Contador: this.props.ini,
        Contador2: this.props.ini2
    }

    Incrementar() {
        const {id} = this.props
        console.log('Incrementar: ' + id)
        
        this.setState(prevstate => ({Contador: prevstate.Contador + 1}), () => {
            console.log(this.state.Contador)

        })
    }

    Incrementar2() {
        const {id} = this.props
        console.log('Incrementar2: ' + id)
            
        this.setState(prevstate => ({Contador2: prevstate.Contador2 + 1}), () => {
            console.log(this.state.Contador2)
    
        })
    }

    render () {
        const {id, color} = this.props
        const {Contador, Contador2} = this.state

        console.log('render contador', id)
        
        return (
            <div className="Contador">
                <div className="jumbotron" style={{background: color}}>
                    <h3>Contador Nro {id} </h3>
                    <hr/>

                    {/*--------------------------------------------*/}

                    {/*------------CONTADOR 1----------------------*/}

                    <h4 className="alert alert-info">Valor: {Contador}</h4>


                    <button className="btn btn-success" onClick={
                        () => this.Incrementar()
                        /* this.Incrementar */
                        /* (function() {this.Incrementar()}).bind(this) */
                    }>Incrementar</button>

                    <br /><br />

                    {/*--------------------------------------------*/}

                    {/*------------CONTADOR 2----------------------*/}

                    <h4 className="alert alert-info">Valor: {Contador2}</h4>


                    <button className="btn btn-success" onClick={
                        () => this.Incrementar2()
                    }>Incrementar2</button>


                </div>
            </div>
        )
    }
}
export default Contador