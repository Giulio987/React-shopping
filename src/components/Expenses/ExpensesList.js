import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> Found No Expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((value) => (
        //se non c'è l'id unico si puo usare il secondo parametro della funzione come indice
        <ExpenseItem
          key={value.id} //ogni componente puo averla
          title={value.title}
          amount={value.amount}
          date={value.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
