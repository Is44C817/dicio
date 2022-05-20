import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col,FloatingLabel, Form, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios';

const Formulario = ({usuarios, setUsuarios}) => {
    const [nombre, setNombre] = useState('');
    const [apellidoPaterno, setPaterno] = useState('');
    const [apellidoMaterno, setMaterno] = useState('');
    const [edad, setEdad] = useState('');
    const [email, setEmail] = useState('');
    const [fechaNac, setFecha] = useState('');
    const [calle, setNCAlle] = useState('');
    const [numero, setNumero] = useState('');
    const [colonia, setColonia] = useState('');
    const [delegacion, setDelegacion] = useState('');
    const [estado, setEstado] = useState('');
    const [codigoPostal, setCodigo] = useState('');
    const [imagen, setImagen] = useState('');



    const generarId= () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {

            const url = 'http://localhost:4000/usuarios';
            const urlDicio = 'https://api.devdicio.net:8444/v1/sec_dev_interview/';

            const config = {
                headers: {
                        'Content-Type': 'application/json',
                        'xc-token': 'J38b4XQNLErVatKIh4oP1jw9e_wYWkS86Y04TMNP',
                        'host': 'api.devdicio.net'
                }
            }

            const objetoUsuario =
            {
                "nombre": nombre,
                "apellidoPaterno": apellidoPaterno,
                "apellidoMaterno": apellidoMaterno,
                "edad": edad,
                "email": email,
                "fechaNac": fechaNac,
                id: generarId(),
                "datos": {
                    "calle": calle,
                    "numero": numero,
                    "colonia": colonia,
                    "delegacion": delegacion,
                    "estado": estado,
                    "codigoPostal": codigoPostal,
                    "imagen": imagen,
                }
              }
        
        console.log('objetoUsuario', objetoUsuario)

        //Cuando uso axio me marca lo siguiente "Access Denied : Please Login or Signup for a new account"
         //const {data} = await axios.post(urlDicio,config, objetoUsuario)
         //console.log('data', data)
         
          await fetch(url, {
             method: 'POST',
             body: JSON.stringify(objetoUsuario),
             headers: {
                 'Content-Type': 'application/json',
                 'xc-token': 'J38b4XQNLErVatKIh4oP1jw9e_wYWkS86Y04TMNP',
                 'host': 'api.devdicio.net'
             }
             
         })  
         setUsuarios([...usuarios, objetoUsuario]) 
        } catch (error) {
            console.log(error)
        }

        if([nombre, apellidoPaterno, apellidoMaterno, edad, email, fechaNac, calle, numero, colonia, delegacion, estado, codigoPostal, imagen].includes('')){

            Swal.fire({
                title: 'Verifica tu información',
                text: 'Hay al menos un campo vacío',
                icon: 'error',
                confirmButtonText: 'Cerrar'
              })

        }else{

            Swal.fire({
                title: 'Usuario creado correctamente',
                icon: 'success',
                confirmButtonText: 'Cerrar'
              })
        }

    
    }

    return(
        <>
        <div className="md:w-1/2 lg:w-4/5"> 
        <Container>
            <Row>
                <Col>
                    <h3 className="font-black text-2xl mx-auto my-2">Información general</h3>
                </Col>
            </Row>
            <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <FloatingLabel
                        controlId="nombreInput"
                        label="Nombre"
                        className="mb-3"
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value)}
                    >
                    <Form.Control type="text" placeholder="Nombre" />
                    </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel
                        controlId="apellidoPatInput"
                        label="Apellido paterno"
                        className="mb-3"
                        value={apellidoPaterno}
                        onChange={ (e) => setPaterno(e.target.value)}
                    >
                    <Form.Control type="text" placeholder="Apellido paterno" />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel
                        controlId="apellidoMatInput"
                        label="Apellido materno"
                        className="mb-3"
                        value={apellidoMaterno}
                        onChange={ (e) => setMaterno(e.target.value)}
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
                        value={edad}
                        onChange={ (e) => setEdad(e.target.value)}
                    >
                    <Form.Control type="number" placeholder="Edad" />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel
                        controlId="emailtInput"
                        label="Email"
                        className="mb-3"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value)}
                    >
                    <Form.Control type="email" placeholder="Email" />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel
                        controlId="fechaNactInput"
                        label="Fecha nacimiento"
                        className="mb-3"
                        value={fechaNac}
                        onChange={ (e) => setFecha(e.target.value)}
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
                        value={calle}
                        onChange={ (e) => setNCAlle(e.target.value)}
                    >
                    <Form.Control type="text" placeholder="Calle" />
                    </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel
                        controlId="numeroInput"
                        label="Número"
                        className="mb-3"
                        value={numero}
                        onChange={ (e) => setNumero(e.target.value)}
                    >
                    <Form.Control type="number" placeholder="Número" />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel
                        controlId="coloniaInput"
                        label="Colonia"
                        className="mb-3"
                        value={colonia}
                        onChange={ (e) => setColonia(e.target.value)}
                    >
                    <Form.Control type="text" placeholder="Colonia" />
                </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FloatingLabel
                        controlId="delegacionInput"
                        label="Municipio"
                        className="mb-3"
                        value={delegacion}
                        onChange={ (e) => setDelegacion(e.target.value)}
                    >
                    <Form.Control type="text" placeholder="Municipio" />
                    </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel
                        controlId="estadoInput"
                        label="Estado"
                        className="mb-3"
                        value={estado}
                        onChange={ (e) => setEstado(e.target.value)}
                    >
                    <Form.Control type="text" placeholder="Estado" />
                </FloatingLabel>
                </Col>
                <Col>
                <FloatingLabel
                        controlId="cpInput"
                        label="CP"
                        className="mb-3"
                        value={codigoPostal}
                        onChange={ (e) => setCodigo(e.target.value)}
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
                        value={imagen}
                        onChange={ (e) => setImagen(e.target.value)}
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
            </Form>
        </Container>
        </div>
        </>

    )
}

export default Formulario