import React, { Component } from 'react'
import Webcam from "react-webcam";

export default class Camara extends Component {
    setRef=webcam=>{
        this.webcam=webcam;
    }

        state={
            imagen:null
        }

         foto=()=>{
             var captura=this.webcam.getScreenshot();
             console.log(captura)
             this.setState({
                 imagen:captura  
             })
         };

    render() {

        return (
            <div className='m-1/2 lg:w-1/5'>
                <Webcam audio={false} height={350} ref={this.setRef} screenshotFormat="image/jpeg" width={350}/>
                 <br/> 
                <button 
                className='bg-indigo-600 w-full p-3 text-white font-bold hover:bg-indigo-700'
                onClick={this.foto}>Capturar imagen</button>
                <hr/>
                <img src={this.state.imagen} alt=""/>  

                <br/>
                <a 
                href={this.state.imagen} download="captura">Descargar captura</a> 
            </div>
        )
    }
}