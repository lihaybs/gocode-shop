import { useEffect } from 'react';
import { useState } from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import product from './components/Product/Product';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart/Cart';

function App() {
  const [products, setProducts] = useState([])
  const [cartList, setCartList] = useState([])
  const [productFilter, setProductsFilter] = useState([])
  const categories = [`All`, ...products.map(p => p.category).filter((value, index, array) => array.indexOf(value) === index)];
  const updateCart = (id) => {
    if (products[0].counter === undefined) {
      setProducts(products.map(product => product.counter ? product : product.counter = 0))
      console.log("hello");
    }
    setProducts(products.map(product => (product.id === id) ? { ...product, counter: (product.counter + 1) } : product));
    setCartList(products.filter(product => product.counter > 0));
    console.log(products);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setProductsFilter(data)
      })
  }, []);


  const selectVal = (val) => {
    setProductsFilter(val === "All" ? products : products.filter(products => products.category === val));
  }
  return (
    <div className="App">
      <Header categories={categories} selectVal={selectVal} />
      <Cart cartList={cartList} />
      <Products products={productFilter} updateCart={updateCart} />
    </div>
  );
}
export default App;
