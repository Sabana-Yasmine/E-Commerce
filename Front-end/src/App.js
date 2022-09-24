//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Product from './product/Product';
import Welcome from './Welcome';
import Signin from './user/Signin';
import Register from './user/Register';
import Navigation from './Navigation'

function App() {
  return (
    <div className="App">
      <Router>
       <Navigation />
       <Routes>
        <Route path = "/" element = {<Welcome/>}/>
        <Route path = "/signin" element = {<Signin/>}/>
        <Route path = "/Product" element = {<Product/>}/>
        <Route path = "/register" element = {<Register/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
