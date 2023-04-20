import { Button } from "../UL/Button";
import { ExpensesForm } from "./ExpensesForm";
import { useState } from "react";
import styles from "styled-components";
export const NewExpense = ({ onSubmit, data }) => {
  const [showForm, setShowForm] = useState(false);
  function openExpensesFormHandler() {
    setShowForm(true);
  }
  function clowseExpensesFormHandler() {
    setShowForm((prev) => !prev);
  }
  return (
    <div>
      {showForm ? (
        <ExpensesForm
          data={data}
          onSubmit={onSubmit}
          onClick={clowseExpensesFormHandler}
        />
      ) : (
        <div
          style={{
            width: "780px",
            height: "91px",
            backgroundColor: "#AD9BE9",
            borderRadius: "12px",
            marginLeft: "330px",
            marginTop: "257px",
          }}
        >
          <NewButton onClick={openExpensesFormHandler}>
            Добавить новый расход
          </NewButton>
        </div>
      )}
    </div>
  );
};

const NewButton = styles.button`
background: #4a026b;
border-radius: 10px;
margin-top: 20px;
margin-left: 276px;
padding: 20px;
font-weight: 600;
color: aliceblue;
background-color: #4a026b;
border: none;
border-radius: 10px;
`;
