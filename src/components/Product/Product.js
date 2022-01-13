import './Product.css'
import Button from 'react-bootstrap/Button'



const Product = ({ img, name, price, id, updateCart }) => (
    <div className="product-card">
        <div className="product-image container">

            <img src={img} alt="" />
            <Button className="btn1" variant="outline-success" type="button" onClick={() => updateCart(id)}>➕</Button>
            <Button className="btn2" variant="outline-danger" type="button" onClick={() => updateCart(id)} >➖</Button>
        </div>
        <div className="product-info">
            <h5> {name} </h5>
            <h6> {price}$ </h6>
        </div>
    </div>
);

export default Product;