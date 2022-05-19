import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col } from 'react-bootstrap'
import Usuario from './Usuario';

const ListadoUsuarios = ({usuarios}) => {
    console.log('desde listadoUsuarios',usuarios)
    return(
        <>
        <div className='md:w-1/2 lg:w-2/5 h-screen overflow-y-scroll'> 
            <Container>
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
                        />
                    ))
                }
                    
   
                </Col>
            </Row>
            </Container>
        </div>
        </>
    )

}
export default ListadoUsuarios