import React from "react";

function Pizza({pizza, setPizzaToEdit}) {
  const {topping, size, vegetarian} = pizza;

  function handleSetPizzaToEdit(event){
    setPizzaToEdit(pizza)    
  }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "True" : "False"}</td>
      <td>
        <button onClick={handleSetPizzaToEdit} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
