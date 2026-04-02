const Dashboard = ({ transactions }) => {
  const income = transactions.filter(t => t.type === "income").reduce((a, t) => a + t.amount, 0);
  const expense = transactions.filter(t => t.type === "expense").reduce((a, t) => a + t.amount, 0);
  const balance = income - expense;

  const card =
    "p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 hover:shadow-xl transition";

  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className={card}>
        <p>Total Balance</p>
        <h2 className="text-xl font-bold">₹{balance.toLocaleString()}</h2>
      </div>

      <div className={card}>
        <p>Income</p>
        <h2 className="text-green-500 font-bold">₹{income.toLocaleString()}</h2>
      </div>

      <div className={card}>
        <p>Expenses</p>
        <h2 className="text-red-500 font-bold">₹{expense.toLocaleString()}</h2>
      </div>
    </div>
  );
};

export default Dashboard;