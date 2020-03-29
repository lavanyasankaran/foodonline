import React from 'react';
import {Switch,Route} from 'react-router-dom';
 
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import OrderPage from './pages/order/order.component';
import Header from './components/header/header.component';
import Checkout from './components/checkout/checkout.component';
function App() {
  return (
    <div >
      
      <Header
/>      <Switch>
      <Route exact path='/' component={HomePage} />
        <Route path='/order' component={OrderPage} />
        <Route exact path='/checkout' component={Checkout} />
        
      </Switch>
      
    </div>

  );
}

export default App;
