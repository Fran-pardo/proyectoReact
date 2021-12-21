import React from 'react';
import { CartProvider } from './components/Context/CartContext';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {NotFound} from './components/NotFound/NotFound';
import Cart from './components/Cart/Cart';



function App() {

  return (

  <div className='App'>

    <CartProvider>

      <BrowserRouter>

        <NavBar/>

        <Switch>
          <Route exact path="/">
              <ItemListContainer greeting='Bienvenido!'/>
            </Route>
            <Route exact path="/categoria/:categoryId">
              <ItemListContainer />
            </Route>
            <Route exact path="/detail/:paramId">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
        </Switch>

      </BrowserRouter>

    </CartProvider>

  </div>

  );

}

export default App;
