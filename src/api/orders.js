import { db } from "./config";
import  { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'

const ordersRef = collection (db, "orders");

export const addOrder = async (order) => {
    const orderDoc = await addDoc (ordersRef, order)
    
    const BuyAlert = () => {
        Swal.fire({
            title: 'Compra finalizada!',
            html: `<p> Compra realizada con éxito. Podés seguir su estado a través de tu código de seguimiento <strong> #${orderDoc.id} <strong></p>`,
            icon: 'success',
            confirmButtonText: 'Terminar',
        })
    }

    BuyAlert ();

    return orderDoc.id
}



