import logo from './logo.svg';
import imagen1 from './images/imagen1.png';
import producto1 from './images/producto1.jpg';
import producto2 from './images/producto2.jpg';
import producto3 from './images/producto3.jpg';
import producto4 from './images/producto4.jpg';
import producto5 from './images/producto5.jpg';
import producto6 from './images/producto6.jpg';
import producto7 from './images/producto7.jpg';
import producto8 from './images/producto8.jpg';
import producto9 from './images/producto9.png';
import producto10 from './images/producto10.jpg';
import producto11 from './images/producto11.png';
import producto12 from './images/producto12.jpg';
import producto13 from './images/producto13.jpg';
import producto14 from './images/producto14.jpg';
import producto15 from './images/producto15.jpg';
import producto16 from './images/producto16.jpg';

import './App.scss';
import PersonWidget from './components/PersonWidget';
import CartWidget from './components/CartWidget';
import NavbarOffcanvas from './components/NavBar';
import Newsletter from './components/Newsletter';
import Cards from './components/Productos';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header_top">
          <p>HASTA 6 CUOTAS SIN INTERÉS</p>
        </div>

        <div className="header_navbar">
          <NavbarOffcanvas
          logo = {logo}
          item1 = "MESAS"
          item2 = "SILLAS"
          item3 = "ESTANTERÍAS"
          item4 = "ESCRITORIOS"
          item5 = "DECORACIÓN"
          item51 = "PLANTAS"
          item52 = "ADORNOS"
          item53 = "LÁMPARAS"
          item5Todo= "VER TODO"
          icon1 = {<PersonWidget/>}
          icon2 = {<CartWidget/>}
          />
        </div>
      </header>

      <main className="main">
        <img src={imagen1} alt="imagenPresentacion" />

        <div className='main_seccionProductos'>
          <div className='main_tituloProductos'>
            <hr />
            <h1> PRODUCTOS </h1>
            <hr />
          </div>

          <div className='main_productos'>
            <Cards className='main_producto'
            imagen = {producto1}
            titulo = "Estantería modular"
            precio = "$5.200"
            />

            <Cards className='main_producto'
            imagen = {producto2}
            titulo = "Estantería madera"
            precio = "$3.800"
            />

            <Cards className='main_producto'
            imagen = {producto3}
            titulo = "Sillón mostaza"
            precio = "$7.800"
            />

            <Cards className='main_producto'
            imagen = {producto4}
            titulo = "Sillon tapizado"
            precio = "$6.500"
            />

            <Cards className='main_producto'
            imagen = {producto5}
            titulo = "Mesa vidrio"
            precio = "$12.000"
            />

            <Cards className='main_producto'
            imagen = {producto6}
            titulo = "Mesa blanca"
            precio = "$14.700"
            />

            <Cards className='main_producto'
            imagen = {producto7}
            titulo = "Escritorio madera"
            precio = "$21.300"
            />

            <Cards className='main_producto'
            imagen = {producto8}
            titulo = "Escritorio curvo"
            precio = "$23.400"
            />

            <Cards className='main_producto'
            imagen = {producto9}
            titulo = "Planta artificial"
            precio = "$2.100"
            />

            <Cards className='main_producto'
            imagen = {producto10}
            titulo = "Combo plantas"
            precio = "$3.600"
            />

            <Cards className='main_producto'
            imagen = {producto11}
            titulo = "Adorno jirafa"
            precio = "$1.300"
            />

            <Cards className='main_producto'
            imagen = {producto12}
            titulo = "Conjunto 3 cuadros"
            precio = "$4.700"
            />

            <Cards className='main_producto'
            imagen = {producto13}
            titulo = "Lámpara ADN"
            precio = "$7.800"
            />

            <Cards className='main_producto'
            imagen = {producto14}
            titulo = "Lámpara LED"
            precio = "$5.900"
            />

            <Cards className='main_producto'
            imagen = {producto15}
            titulo = "Silla madera"
            precio = "$4.400"
            />

            <Cards className='main_producto'
            imagen = {producto16}
            titulo = "Silla blanca"
            precio = "$7.100"
            />
          </div>
        </div>

        <div className='main_newsletter'>
          <h2>¡Recibí nuestras novedades!</h2>
          <Newsletter />
        </div>
      </main>

      <footer className="footer">
        <div>
          <p>Copyright © 2020 - All Right Reserved.</p>
          <p>Designed by <strong>Mariana Mungo</strong></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
