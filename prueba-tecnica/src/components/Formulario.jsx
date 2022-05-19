import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col,FloatingLabel, Form, Button } from 'react-bootstrap'

const Formulario = () => {
    return(
        <>
        <div className='md:w-1/2 lg:w-3/5'> 
        <Container>
            <Row>
                <Col>
                    <h3 className="font-black text-2xl mx-auto my-2">Información general</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FloatingLabel
                        controlId="nombreInput"
                        label="Nombre"
                        className="mb-3"
                    >
                    <Form.Control type="text" placeholder="Nombre" />
                    </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel
                        controlId="apellidoPatInput"
                        label="Apellido paterno"
                        className="mb-3"
                    >
                    <Form.Control type="text" placeholder="Apellido paterno" />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel
                        controlId="apellidoMatInput"
                        label="Apellido materno"
                        className="mb-3"
                    >
                    <Form.Control type="text" placeholder="Apellido materno" />
                </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col>
                <FloatingLabel
                        controlId="edadInput"
                        label="Edad"
                        className="mb-3"
                    >
                    <Form.Control type="number" placeholder="Edad" />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel
                        controlId="emailtInput"
                        label="Email"
                        className="mb-3"
                    >
                    <Form.Control type="email" placeholder="Email" />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel
                        controlId="fechaNactInput"
                        label="Fecha nacimiento"
                        className="mb-3"
                    >
                    <Form.Control type="date" placeholder="Fecha nacimiento" />
                </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3 className="font-black text-2xl mx-auto my-2">Otros datos</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FloatingLabel
                        controlId="calleInput"
                        label="Calle"
                        className="mb-3"
                    >
                    <Form.Control type="text" placeholder="Calle" />
                    </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel
                        controlId="numeroInput"
                        label="Número"
                        className="mb-3"
                    >
                    <Form.Control type="number" placeholder="Número" />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel
                        controlId="coloniaInput"
                        label="Colonia"
                        className="mb-3"
                    >
                    <Form.Control type="text" placeholder="Colonia" />
                </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FloatingLabel
                        controlId="delegacionInput"
                        label="Delegación/Municipio"
                        className="mb-3"
                    >
                    <Form.Control type="text" placeholder="Delegación/Municipio" />
                    </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel
                        controlId="estadoInput"
                        label="Estado"
                        className="mb-3"
                    >
                    <Form.Control type="text" placeholder="Estado" />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel
                        controlId="cpInput"
                        label="CP"
                        className="mb-3"
                    >
                    <Form.Control type="text" placeholder="Cp" />
                </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col>
                <FloatingLabel
                        controlId="imagenInput"
                        label="Imagen base64"
                        className="mb-3"
                    >
                    <Form.Control type="text" placeholder="Imagen base64" />
                </FloatingLabel>  
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button 
                        type="submit" 
                        className='bg-indigo-600 w-full p-3 text-white font-bold hover:bg-indigo-700'
                        >Guardar registro</Button>
                </Col>
            </Row>
        </Container>
        </div>
        </>

    )
}

export default Formulario