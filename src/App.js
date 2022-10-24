import logo from './logo.svg';
import imagen1 from './images/imagen1.png';


import './App.scss';
import PersonWidget from './components/PersonWidget';
import CartWidget from './components/CartWidget';
import NavBar from './components/NavBar';
import Newsletter from './components/Newsletter';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header_top">
          <p>HASTA 6 CUOTAS SIN INTERÉS</p>
        </div>

        <div className="header_navbar">
          <NavBar
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

          <ItemListContainer />
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
