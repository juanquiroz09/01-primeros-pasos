import React from "react";

const EventosComponente = () => {
  const handleOnClick = (e, name) => {
    console.log("click " + name);
  };
  return (
    <div>
      <h1>Eventos en React</h1>
      <button onClick={e => {handleOnClick(e,"Juan")}}>Click!!</button>
    </div>
  );
};

export default EventosComponente;
