import cartProvider from './components/cart/store/cartProvider'
import Header from './components/layout/Header'
import Meals from './components/meals/Meals'
import Cart from './components/cart/Cart'
import {useState} from 'react'
function App() {
  const[cartShown,setcartShown]=useState(false);
  const cartHandler =()=>{
    setcartShown(true)
  }
  const cartcloseHandler=()=>{
    setcartShown(false)
  }
  return (

   <cartProvider>
   {cartShown && <Cart onClose={cartcloseHandler}/>}
   <Meals/>
  <Header onClick={cartHandler} /> 

  </cartProvider>                                                                                               
    
  );
}

export default App;
