function ExpensesDate({ date }) {
  const month = date?.toLocaleString("en-US", { month: "long" });
  const day = date?.toLocaleString("en-US", { day: "2-digit" });
  const year = date?.toLocaleString("en-US", { year: "2-digit" });

  return (
    <div className="ExpensesDate">
      <div className="expenses-date_month">{month}</div>
      <div className="expenses-date_day">{day}</div>
      <div className="expenses-date_day">{year}</div>
      <div className="expenses-date_year">{year}</div>
    </div>
  );
}

export default ExpensesDate;
