
import Product from "../Product/Product";
import './Products.css'



const Products = ({ products, updateCart }) => {
    return (
        <section className="products">
            {products.map(({ id, image, title, price }) => (
                <Product key={id} img={image} name={title} price={price} id={id} updateCart={updateCart} />
            ))}
        </section>
    );
};

export default Products;