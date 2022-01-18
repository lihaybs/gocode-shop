import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from './components/ProductPage/ProductPage'


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/productPage/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}



export default App;