import React from "react";

const SecondComponent = () => {
  //const libros = ["Hary Potter", "Games of Thrones", "Clean Code"];
  const libros = [];
  return (
    <div className="segundo-componente">
      <ul>
        {libros.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    </div>
  );
};

export default SecondComponent;
