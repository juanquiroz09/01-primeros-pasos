//Importar modulos de react / dependencias
import React from "react";

//Funcion del componente
const MiComponente = () => {

let usuario = {
  name: "Juan",
  email: "juan.quiroz1009@gmail.com",
  lastname: "Quiroz"
}

    return <div className="mi-componente">
        <h1>Hola</h1>
        <ul>
            <li>Nombre: <strong>{usuario.name}</strong></li>
            <li>Apellido: <strong>{usuario.lastname}</strong></li>
            <li>Email: <strong>{usuario.email}</strong></li>
        </ul>
    </div>
};

//Export
export default MiComponente;