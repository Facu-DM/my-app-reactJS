import "./Mensajes.css";

function Mensajes(props) {
const {titulo, color} = props

  return (
    <div className="Mensajes">
      <div className="jumbotron" style={{backgroundColor:color}}>
        <h3>{titulo}</h3>
        {new Date().toLocaleDateString()}
        <hr />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          obcaecati cupiditate aperiam pariatur hic est repellendus ut qui
          omnis, nam sit eveniet consectetur esse commodi nostrum in explicabo
          earum quaerat.
        </p>
      </div>
    </div>
  )
}

export default Mensajes;