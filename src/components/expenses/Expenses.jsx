import { ExpensesCard } from "./ExpensesCard";
import { ExpensesFilter } from "./ExpensesFilter";
import { useState } from "react";
export const Expenses = ({ data }) => {
  const [selectedYear, setselectedYear] = useState("2023");
  function getSelectValue(event) {
    console.log(event.target.value);
    setselectedYear(event.target.value);
  }
  const filteredYear = data.filter((el) => {
    return el.date === selectedYear;
  });
  console.log(filteredYear);

  return (
    <div>
      <ExpensesFilter getValue={getSelectValue} />
      <div>
        {data.map((el) => {
          return <ExpensesCard el={el} />;
        })}
      </div>
    </div>
  );
};
