import ExpensesList from "./components/Expenses/ExpensesList";

const App = () => {
  const expenses = [
    { id: 1, title: "Book", amount: 10.5, date: new Date(2023, 2, 17) },
    { id: 2, title: "Car", amount: 6600.0, date: new Date(2021, 8, 27) },
    { id: 3, title: "Bicycle", amount: 980.0, date: new Date(2022, 7, 24) },
    { id: 4, title: "Watch", amount: 125.7, date: new Date(2022, 5, 8) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpensesList items={expenses} />
    </div>
  );
};

export default App;