import "./App.css";
import Expenses from "./components/Expenses";

function App() {
  const expensesData = [
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
    <div className="App">
      <Expenses data={expensesData}/>
    </div>
  );
}

export default App;
