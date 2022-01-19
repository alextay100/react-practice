import ExpenseItem from "./ExpenseItem";

function Expenses() {
    const expenses = [
        {
          id: "e1",
          title: "Car Insurance",
          amount: 325.76,
          date: new Date(2021, 7, 4),
        },
        {
          id: "e2",
          title: "Table",
          amount: 425.76,
          date: new Date(2021, 9, 24),
        },
        {
          id: "e3",
          title: "Phone Bill",
          amount: 525.76,
          date: new Date(2021, 10, 14),
        },
        {
          id: "e4",
          title: "Mortgage",
          amount: 625.76,
          date: new Date(2021, 5, 18),
        },
      ];

  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />

      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default Expenses;
