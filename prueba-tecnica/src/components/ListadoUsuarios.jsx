import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Alert, Table } from 'react-bootstrap'
import Usuario from './Usuario';

const ListadoUsuarios = ({usuarios, setUsuario}) => {
    
    return(
        <>
        <div className='overflow-y-scroll'> 
            <Container>
                {usuarios && usuarios.length ? (
                    <>
                        <Row>
                            <Col>
                                <h1 className='font-black text-2xl mx-auto'>Listado usuarios</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Apellido Paterno</th>
                                        <th>Apellido Materno</th>
                                        <th>Edad</th>
                                        <th>Email</th>
                                        <th>Fecha Nacimiento</th>
                                        <th>Calle</th>
                                        <th>Número</th>
                                        <th>Colonia</th>
                                        <th>Municipio</th>
                                        <th>Estado</th>
                                        <th>Código Postal</th>
                                        <th>Imagen base64</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    usuarios.map( usuario => (
                                        <Usuario 
                                        key={usuario.id}
                                        usuario={usuario}
                                        setUsuario={setUsuario}
                                        />
                                    ))
                                }
                                 </tbody>
                            </Table>

                        
                            </Col>
                        </Row>
                    </>
                ) : (
                    <>
                    <Row>
                            <Col>
                                <h1 className='font-black text-2xl mx-auto'>Listado usuarios</h1>
                            </Col>
                    </Row>
                    <Alert  variant='danger'>
                        No hay usuarios
                    </Alert>
                    </>
                )}

            </Container>
        </div>
        </>
    )

}
export default ListadoUsuarios