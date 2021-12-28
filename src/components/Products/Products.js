import Product from "../Product/Product";
import './Products.css'
const Products = ({ products }) => {
    return (
        <section className="products">
            {products.map(({ id, image, title, price }) => (
                <Product key={id} img={image} name={title} price={price} />
            ))}
        </section>
    );
};

export default Products;