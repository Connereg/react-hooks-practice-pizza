import React from "react";
import Pizza from "./Pizza";

function PizzaList(props) {
  const {pizzaData, setPizzaToEdit} = props;

  const pizzaInTable = pizzaData.map(pizza => {
    return (
      <Pizza
       key={pizza.id}
       pizza={pizza}
       setPizzaToEdit={setPizzaToEdit}
       />
    )
  })

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          pizzaInTable
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
