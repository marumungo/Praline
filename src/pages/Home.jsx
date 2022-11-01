import { ItemListContainer } from "components/index"
import { Newsletter } from "components/index"
import imagen1 from "../images/imagen1.png"

export const Home = () => {
    return (
            <main className="main">
                <img className="imagenPresentacion" src={imagen1} alt="imagenPresentacion" />

                <div className='main_seccionProductos'>
                    <ItemListContainer />
                </div>

                <div className='main_newsletter'>
                    <Newsletter />
                </div>
            </main>
    )
}