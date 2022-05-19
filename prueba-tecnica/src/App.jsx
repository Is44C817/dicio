import Formulario from "./components/Formulario"
import Header from './components/Header'
import ListadoUsuarios from "./components/ListadoUsuarios"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col } from 'react-bootstrap'

function App() {

  return (
    <>
    <Container>
      
      <Header />

      <div className="mt-12 md:flex">
        <Formulario />
        <ListadoUsuarios />
      </div>

    </Container>
    </>

  )
}

export default App
