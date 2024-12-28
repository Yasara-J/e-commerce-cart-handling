// import ProductList from "./components/ProductList";
// import Cart from "./components/Cart";
// import OrderConfirmation from "./components/OrderConfirmation";

// function App() {
//   return (
//     <div>

//       <ProductList/>
      

//     </div>
//   )
// }

// export default App

import { Container } from '@mui/material';
import React from 'react'
import ProductList from './components/ProductList';

const App = () => {
  return <Container>

    <ProductList/>

  </Container>;
  
}

export default App
