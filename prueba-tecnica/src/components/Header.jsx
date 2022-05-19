import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col } from 'react-bootstrap'

const Header = () => {
    return(
        <>
            <Container>
            <Row>
                <Col>
                    <h1 className='font-black text-4xl text-center mx-auto text-indigo-600'>Seguimiento usuarios</h1>
                </Col>
            </Row>
            </Container>
        </>
    )

}
export default Header