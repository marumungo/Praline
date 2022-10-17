import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Newsletter() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form className='main_form' noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-16 main_form_labels">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        required
                        type="text"
                    />
                    <Form.Control.Feedback>Bien!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        required
                        type="text"
                    />
                    <Form.Control.Feedback>Bien!</Form.Control.Feedback>
                </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                        />
                        <Form.Control.Feedback>Bien!</Form.Control.Feedback>
                </Form.Group>
                <Button className="main_form_button" md="4" type="submit">ENVIAR</Button>
            </Row>
        </Form>
    );
}

export default Newsletter;