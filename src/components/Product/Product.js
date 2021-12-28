import './Product.css'
const Product = ({ img, name, price }) => (
    <div class="product-card">
        <div class="product-image">
            <img src={img} alt="image" />
        </div>
        <div class="product-info">
            <h5> {name} </h5>
            <h6> {price}$ </h6>
        </div>
    </div>
);

export default Product;