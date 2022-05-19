import Formulario from "./components/Formulario"
import Header from './components/Header'
import ListadoUsuarios from "./components/ListadoUsuarios"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {

  const INITIAL = JSON.parse(localStorage.getItem('usuariosDicio')) ?? [];
  const [usuarios, setUsuarios] = useState(INITIAL);
  const [usuario, setUsuario] = useState({});

  /* useEffect(()=>{
    localStorage.setItem('usuariosDicio',JSON.stringify(usuarios))
  },[usuarios]) */

  useEffect(() => {
    const obtenerListado = async () => {
        try{

            const urlDicio = 'https://api.devdicio.net:8444/v1/sec_dev_interview/';
   
            const config = {
               headers: {
                'Content-Type': 'application/json',
                'xc-token': 'J38b4XQNLErVatKIh4oP1jw9e_wYWkS86Y04TMNP',
                'host': 'api.devdicio.net'
        }
            }

            const {data} = await axios(urlDicio, config)
            console.log('data listado', data)
            setUsuarios(data)
        }catch(error){
            console.log(error)
        }
    }
    obtenerListado()
}, [])

  return (
    <>
    <Container>

      <Header />

      <div className="md:flex">
        <Formulario 
          usuarios={usuarios}
          setUsuarios={setUsuarios}
          usaurio={usuarios}
          setUsuario={setUsuario}
        />
      </div>

      

      <div className="mt-5 md:flex">
        <ListadoUsuarios 
         usuarios={usuarios}
         setusuario={setUsuario}
        />
      </div>

    </Container>
    </>

  )
}

export default App
