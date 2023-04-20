import { NewExpense } from "./components/newExpenses/NewExpenses";
import { useState } from "react";
import styles from "./App.module.css";

const fruitsData = [];

function App() {
  const [newproduct, setNewProduct] = useState(fruitsData);

  const addNewExpensesHandler = (data) => {
    const arr = [...newproduct, data];
    setNewProduct(arr);
  };
  return (
    <div className={styles.App}>
      <NewExpense data={newproduct} onSubmit={addNewExpensesHandler} />
    </div>
  );
}
export default App;
