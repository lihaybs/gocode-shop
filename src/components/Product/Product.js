import './Product.css'
import Button from 'react-bootstrap/Button';
const Product = ({ img, title, price, id, counter, updateCart }) => {
    return (
        <div className="product-card">
            <div className=" container product-image">
                <img src={img} alt="" />
                <Button className="btn2 btn-flot" variant='outline-success' onClick={() => updateCart(1, id)}>➕</Button>
                <Button className="btn1 btn-flot" variant='outline-danger' onClick={() => counter && updateCart(0, id)}>➖</Button>
            </div>
            <div className="product-info">
                <h5> {title}  </h5>
                <h6> {price}$ </h6>

            </div>
        </div>
    );
};


export default Product