import { Outlet } from '../../../node_modules/react-router-dom/dist/index';
import logo from '../../logo.svg';
import {NavBar, Footer, CartWidget, PersonWidget} from "../index"

export const UserLayout = () => {
    return (
        <div>
            <NavBar
            logo = {logo}
            icon1 = {<PersonWidget/>}
            icon2 = {<CartWidget/>}
            />
            <Outlet />
            <Footer />
        </div>
    )
};