import { Outlet } from '../../../node_modules/react-router-dom/dist/index';
import logo from '../../logo.svg';
import {NavBar, Footer, CartWidget, PersonWidget} from "../index"

export const UserLayout = () => {
    return (
        <div>
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
            <Outlet />
            <Footer />
        </div>
    )
};