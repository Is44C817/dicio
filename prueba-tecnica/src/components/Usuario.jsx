const Usuario = ({usuario}) => {

    return(
        <>
        <tr>
            <td>{usuario.nombre}</td>
            <td>{usuario.apellidoPaterno}</td>
            <td>{usuario.apellidoMaterno}</td>
            <td>{usuario.edad}</td>
            <td>{usuario.email}</td>
            <td>{usuario.fechaNac}</td>
            <td>{usuario.datos.calle}</td>
            <td>{usuario.datos.numero}</td>
            <td>{usuario.datos.colonia}</td>
            <td>{usuario.datos.delegacion}</td>
            <td>{usuario.datos.estado}</td>
            <td>{usuario.datos.codigoPostal}</td>
            <td>{usuario.datos.imagen}</td>
        </tr>
        </>

        
            
    )
}

export default Usuario;