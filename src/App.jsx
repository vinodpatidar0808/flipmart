import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AuthProvider from './context/AuthProvider';
import Admin from './pages/Admin';
import AdminRoute from './pages/AdminRoute';
import Cart from './pages/Cart';
import CreateProduct from './pages/CreateProduct';
import Home from './pages/Home';
import Products from './pages/Products';
import ProtectedRoute from './pages/ProtectedRoute';
import SignupLogin from './pages/SignupLogin';

function App() {
  return (
    <>
      <>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route
                path="/"
                element={<Layout />}>
                <Route
                  index
                  element={<Home />}
                />
                <Route
                  path="/signup"
                  element={<SignupLogin type="signup" />}
                />
                <Route
                  path="/login"
                  element={<SignupLogin type="login" />}
                />

                <Route
                  path="/products"
                  element={<Products />}
                />
                {/* </Route> */}

                <Route element={<ProtectedRoute />}>
                  {/* <Route
                path="/user/orders"
                element={<Orders />}
              /> */}
                  <Route
                    path="/user/cart"
                    element={<Cart />}
                  />
                </Route>

                {/* admin routes */}
                <Route element={<AdminRoute />}>
                  <Route
                    path="/admin"
                    element={<Admin />}
                  />
                  <Route
                    path="/admin/createproduct"
                    element={<CreateProduct />}
                  />
                </Route>
              </Route>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </>
    </>
  );
}

export default App;
