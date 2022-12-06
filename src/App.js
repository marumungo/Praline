import './styles/styles.scss';

import { BrowserRouter, Routes, Route, Navigate } from '../node_modules/react-router-dom/dist/index';
import { Home } from "./pages/Home"
import { Category } from "./pages/Category"
import { Detail } from "./pages/Detail/Detail"
import { Cart } from "./pages/Cart/Cart"
import { Error } from "./pages/Error/Error"
import { CartProvider } from 'context/cartContext';
import { UserLayout } from 'components/index';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<UserLayout />}>
                <Route index element={<Home />} />
                <Route exact path="/categoria/:categoryId" element={<Category />} />
                <Route exact path="/producto/:productId" element={<Detail />} />
                <Route exact path="/carrito" element={<Cart />} />
                <Route exact path={"/paginaNoEncontrada"} element={<Error />} />
                <Route path="/*" element={<Navigate to="/paginaNoEncontrada" replace />} />
              </Route>
            </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;