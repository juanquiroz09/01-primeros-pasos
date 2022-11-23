import React from "react";

const SecondComponent = () => {
  //const libros = ["Hary Potter", "Games of Thrones", "Clean Code"];
  const libros = ["harry poter"];
  return (
    <div className="segundo-componente">
        <h1>Listado de Libros</h1>
        {libros.length >=1 ? (
              <ul>
              {libros.map((element, index) => {
                return <li key={index}>{element}</li>;
              })}
            </ul>
            )
            :(
            <p>No hay libros</p>
        )
    }

    </div>
  );
};

export default SecondComponent;
