const Usuario = ({usuario}) => {

    return(
            <div className="my-10 bg-white shadow-md px-3 py-2 rounded-xl">
                <p className="font-bold  text-gray-700 uppercase">
                    Nombre: {''}
                    <span className="font-normal normal-case">{usuario.nombre}</span>
                </p>

                <p className="font-bold  text-gray-700 uppercase">
                    Apellido Paterno: {''}
                    <span className="font-normal normal-case">{usuario.apPaterno}</span>
                </p>

                <p className="font-bold  text-gray-700 uppercase">
                    Apellido Materno: {''}
                    <span className="font-normal normal-case">{usuario.apMaterno}</span>
                </p>

                <p className="font-bold  text-gray-700 uppercase">
                    Edad: {''}
                    <span className="font-normal normal-case">{usuario.edad}</span>
                </p>

                <p className="font-bold text-gray-700 uppercase">
                    Email: {''}
                    <span className="font-normal normal-case">{usuario.email}</span>
                </p>
                <p className="font-bold text-gray-700 uppercase">
                    Fecha: {''}
                    <span className="font-normal normal-case">{usuario.fechaNac}</span>
                </p>
                <p className="font-bold text-gray-700 uppercase">
                    Calle: {''}
                    <span className="font-normal normal-case">{usuario.datos.calle}</span>
                </p>
                <p className="font-bold text-gray-700 uppercase">
                    Número: {''}
                    <span className="font-normal normal-case">{usuario.datos.numero}</span>
                </p>
                <p className="font-bold text-gray-700 uppercase">
                    Colonia: {''}
                    <span className="font-normal normal-case">{usuario.datos.colonia}</span>
                </p>
                <p className="font-bold text-gray-700 uppercase">
                    Municipio: {''}
                    <span className="font-normal normal-case">{usuario.datos.delegacion}</span>
                </p>
                <p className="font-bold text-gray-700 uppercase">
                    Estado: {''}
                    <span className="font-normal normal-case">{usuario.datos.estado}</span>
                </p>
                <p className="font-bold text-gray-700 uppercase">
                    CP: {''}
                    <span className="font-normal normal-case">{usuario.datos.codigo}</span>
                </p>
                <p className="font-bold text-gray-700 uppercase">
                    Imagen: {''}
                    <span className="font-normal normal-case">{usuario.datos.imagen}</span>
                </p>
            </div>

    )
}

export default Usuario;