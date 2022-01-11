import { useEffect } from 'react';
import { useState } from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import './App.css';

function App() {
  const [products, setProducts] = useState([])
  const [productFilter, setProductsFilter] = useState([])
  const categories = [`All`, ...products.map(p => p.category).filter((value, index, array) => array.indexOf(value) === index)];


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
      <Products products={products.filter(product => product.category === selectVal)} />
    </div>
  );
}
export default App;
