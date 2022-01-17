import { Button } from "react-bootstrap";
import "./Cart_item.css"
export default function CartItem({ price, counter, image, title, id, updateCart }) {

    return (<div className="cart-card" >
        <div className=" cart-container cart-image">
            <span className="counter-span">{counter}</span>
            <img src={image} alt="" />
            <Button className="btn2" variant='outline-success' onClick={() => updateCart(1, id)}>➕</Button>
            <Button className="btn1" variant='outline-danger' onClick={() => counter && updateCart(0, id)}>➖</Button>
        </div>
        <div className="cart-info" title={title}>
            <label > {title.split(" ")[0]}  </label>
            <label> {parseFloat(price * counter).toFixed(2)}$ </label>
            <Button onClick={() => updateCart(-1, id)}>🗑</Button>
        </div>
    </div>)
        ;

}