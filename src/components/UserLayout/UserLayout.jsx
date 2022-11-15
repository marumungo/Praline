import { Outlet } from '../../../node_modules/react-router-dom/dist/index';
import logo from '../../logo.svg';
import {NavBar, Footer} from "../index"

export const UserLayout = () => {
    return (
        <div>
            <NavBar
            logo = {logo}
            />
            <Outlet />
            <Footer />
        </div>
    )
};