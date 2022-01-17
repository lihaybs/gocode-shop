import "./Header.css"
import Form from 'react-bootstrap/Form';

const Header = ({ categories, selectVal, sortAfterSelect }) => {

    return (


        <nav className="product-filter">
            <h1>Welcome to my shop</h1>

            <div className="sort">
                <div className="collection-sort">
                    <label>Filter by:</label>
                    <Form.Select aria-label="Default select example" onChange={(e) => selectVal(e.target.value)}>
                        {categories.map((value) => <option key={value} value={value}> {value} </option>)}
                    </Form.Select>
                </div>

                <div className="collection-sort">
                    <label>Sort by:</label>
                    <Form.Select onChange={(e) => sortAfterSelect(e.target.value)}>
                        <option value="/">Featured</option>
                        <option value="/">Best Selling</option>
                        <option value="/">Alphabetically, A-Z</option>
                        <option value="/">Alphabetically, Z-A</option>
                        <option value="price">Price, low to high</option>
                        <option value="/">Price, high to low</option>
                        <option value="/">Date, new to old</option>
                        <option value="/">Date, old to new</option>
                    </Form.Select>
                </div>
            </div>
        </nav>

    );
};

export default Header