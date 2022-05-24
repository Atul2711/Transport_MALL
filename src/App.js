import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
//Provider is used to inject store into the application

import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Navbar from './components/Navbar';
import store from './store/store';


function App() {
  return (
    <div className="App">  
     <Provider store={store}>
     <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/products/:id' element={<Product />}></Route>
        </Routes>
         
      </BrowserRouter>
     </Provider>
    </div>
  );
}

export default App;
