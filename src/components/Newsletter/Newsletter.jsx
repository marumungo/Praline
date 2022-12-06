import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { db } from 'api/config';
import  { collection, addDoc } from "firebase/firestore";

export function Newsletter() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };

    const newslettersRef = collection (db, "newsletters");

    const addNewsletter = async (newsletter) => {
        const newsletterDoc = await addDoc (newslettersRef, newsletter)

        return newsletterDoc.id
    }

    const createNewsletter = async () => {
        const usuario = {
            name,
            surname,
            email
        };

        await addNewsletter (usuario);
    }

    return (
        <div>
            <h2>¡Recibí nuestras novedades!</h2>
            <Form className='main_form' noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-16 main_form_labels">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Form.Control.Feedback>Bien!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            onChange={(e) => setSurname(e.target.value)}
                        />
                        <Form.Control.Feedback>Bien!</Form.Control.Feedback>
                    </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Form.Control.Feedback>Bien!</Form.Control.Feedback>
                    </Form.Group>
                    <Button className="main_form_button" md="4" type="submit" onClick={createNewsletter}>ENVIAR</Button>
                </Row>
            </Form>
        </div>
    );
}