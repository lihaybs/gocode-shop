import Product from "../Product/Product";
import "./Products.css";

const Products = ({ products, updateCart }) => {
    return (<section className="products">
        {products.map(({ id, image, title, price, counter }) => (
            <Product key={id} img={image} title={title} price={price} id={id} counter={counter} updateCart={updateCart} />
        ))}
    </section>)
};


export default Products