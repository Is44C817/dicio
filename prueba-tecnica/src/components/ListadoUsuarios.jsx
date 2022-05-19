import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Alert } from 'react-bootstrap'
import Usuario from './Usuario';

const ListadoUsuarios = ({usuarios, setUsuario}) => {
    
    return(
        <>
        <div className='md:w-1/2 lg:w-2/5 h-screen overflow-y-scroll'> 
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
                            {
                                usuarios.map( usuario => (
                                    <Usuario 
                                    key={usuario.id}
                                    usuario={usuario}
                                    setUsuario={setUsuario}
                                    />
                                ))
                            }
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