import './styles/styles.scss';
import { BrowserRouter, Routes, Route } from '../node_modules/react-router-dom/dist/index';
import { Home } from "./pages/Home"
import { Category } from "./pages/Category"
import { Detail } from "./pages/Detail/Detail"
import { Cart } from "./pages/Cart"
import { UserLayout } from 'components/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path={"/categoria/:categoryId"} element={<Category />} />
            <Route path={"/producto/:productId"} element={<Detail />} />
            <Route path={"/carrito"} element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;