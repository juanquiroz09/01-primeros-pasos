import React from "react";

const EventosComponente = () => {
  const handleOnClick = (e, name) => {
    console.log("click " + name);
  };

  const handleDoubleClick = (event, name_two) =>{
    console.log("Double click " + name_two);
  };

  const mouse = (e, action) =>{
    console.log("has " + action);
  };

  return (
    <div>
      <h1>Eventos en React</h1>
      <p>
        {/*Evento click*/}
       <button onClick={e => {handleOnClick(e,"Juan")}}>Click!!</button>
      </p>
      <p>
        {/*Evento doble click */}
        <button onDoubleClick={event => {handleDoubleClick(event, "Elias")}}>Double click</button>
      </p>
      <div id="caja" 
      onMouseEnter={e => {mouse(e,"entrado")}}
      onMouseLeave={e => {mouse(e,"salido")}}
      >
        {/*Evento onMouseEnter on MouseLeave */}
        Pasa por encima
      </div>
          </div>
  );
};

export default EventosComponente;
