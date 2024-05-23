import "./Dish.css"
const Dish = (props) => {
  return (
    <div className="card" key ={props.number}>
        <h2>Product: {props.name}</h2>
        <p>Number: {props.number}</p>
        <p>Description: {props.description}</p>
        <p className="price">{props.price} €</p>
    </div>
  )
}

export default Dish