import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [ fetchSwitch, setFetchSwitch ] = useState(false)
  
  const [ pizzaData, setPizzaData ] = useState([])
  const [ pizzaToEdit, setPizzaToEdit] = useState(null)

  useEffect(() => {
    console.log("Fetching Data...")
    fetchPizzaData()
  }, [fetchSwitch])

  function fetchPizzaData(){
    fetch("http://localhost:3001/pizzas")
    .then(resp => resp.json())
    .then(pizzaData => {
      console.log("Fetch Complete!")
      setPizzaData(pizzaData)
    })
  }

  function patchPizzaData(updatedPizza){
    fetch(`http://localhost:3001/pizzas/${updatedPizza.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: updatedPizza.topping,
        size: updatedPizza.size,
        vegetarian: updatedPizza.vegetarian
      })
    }).then(
      console.log(`Edited Pizza ID:${updatedPizza.id}`),
      setFetchSwitch(!fetchSwitch)
    );
  }

  return (
    <>
      <Header />
      <PizzaForm pizzaToEdit={pizzaToEdit} patchPizzaData={patchPizzaData}/>
      <PizzaList pizzaData={pizzaData} setPizzaToEdit={setPizzaToEdit}/>
    </>
  );
}

export default App;
