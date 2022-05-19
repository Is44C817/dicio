import Formulario from "./components/Formulario"
import Header from './components/Header'
import ListadoUsuarios from "./components/ListadoUsuarios"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
function App() {

  const INITIAL = JSON.parse(localStorage.getItem('usuariosDicio')) ?? [];
  const [usuarios, setUsuarios] = useState(INITIAL);
  const [usuario, setUsuario] = useState({});

  useEffect(()=>{
    localStorage.setItem('usuariosDicio',JSON.stringify(usuarios))
  },[usuarios])


  return (
    <>
    <Container>
      
      <Header />

      <div className="mt-12 md:flex">
        <Formulario 
          usuarios={usuarios}
          setUsuarios={setUsuarios}
          usuario={usuario}
          setUsuario={setUsuario}
        />
        <ListadoUsuarios 
          usuarios={usuarios}
          setUsuario={setUsuario}
        />
      </div>

    </Container>
    </>

  )
}

export default App
