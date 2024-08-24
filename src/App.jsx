import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Products from './pages/Products';
import SignupLogin from './pages/SignupLogin';

function App() {
  return (
    <>
      <>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route
                index
                element={<Home />}
              />
              <Route
                path="signup"
                element={<SignupLogin type="signup" />}
              />
              <Route
                path="login"
                element={<SignupLogin type="login" />}
              />
              {/* <Route
                path="/user/orders"
                element={<Orders />}
              /> */}
              <Route
                path="/user/cart"
                element={<Cart />}
              />
              <Route
                path="/products"
                element={<Products />}
              />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </>
    </>
  );
}

export default App;
