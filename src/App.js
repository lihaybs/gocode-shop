import { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart/Cart';

function App() {
  const [products, setproducts] = useState([""]);
  const [productfilterd, setproductfilterd] = useState([""]);
  const [cartList, setCartList] = useState([])
  const categories = ["All", ...products.map(p => p.category).filter((value, index, array) => array.indexOf(value) === index)]


  function updateCart(add, id) {

    setproducts(products.map(product => {
      add === -1 && product.id === id ? product.counter = 0 : add && product.id === id ? product.counter++ : !add && product.id === id && product.counter--
      return product
    }))
    console.log(products);
    setCartList(products.filter(product => product.counter > 0));

  }




  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then((res) => res.json())
      .then((data) => {
        data.map(product => { product.counter = 0; return product })
        setproducts(data)
        setproductfilterd(data)
      })
  }, []);



  const selectVal = (val) => {
    setproductfilterd(val === "All" ? products : products.filter(product => product.category === val));
  };


  const sortAfterSelect = (val) => {
    setproductfilterd(productfilterd.sort((a, b) => a[val] - b[val]))
  }
  return (
    <div className="App">
      <Header categories={categories} selectVal={selectVal} sortAfterSelect={sortAfterSelect} />
      <div className='shopping-aria'>
        <Cart cartList={cartList} updateCart={updateCart} />
        <Products products={productfilterd} updateCart={updateCart} />
      </div>
    </div>
  );
}


export default App;