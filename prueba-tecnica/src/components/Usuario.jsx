const Usuario = () => {

    return(
            <div className="my-10 bg-white shadow-md px-3 py-2 rounded-xl">
                <p className="font-bold  text-gray-700 uppercase">
                    Nombre: {''}
                    <span className="font-normal normal-case"></span>
                </p>

                <p className="font-bold  text-gray-700 uppercase">
                    Apellido Paterno: {''}
                    <span className="font-normal normal-case"></span>
                </p>

                <p className="font-bold  text-gray-700 uppercase">
                    Apellido Materno: {''}
                    <span className="font-normal normal-case"></span>
                </p>

                <p className="font-bold  text-gray-700 uppercase">
                    Edad: {''}
                    <span className="font-normal normal-case"></span>
                </p>

                <p className="font-bold text-gray-700 uppercase">
                    Email: {''}
                    <span className="font-normal normal-case"></span>
                </p>
            </div>

    )
}

export default Usuario;