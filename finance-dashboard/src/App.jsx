import { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import Charts from "./components/Charts";
import Transactions from "./components/Transactions";
import Insights from "./components/Insights";

function App() {
  const [role, setRole] = useState("viewer");
  const [dark, setDark] = useState(false);

  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            date: "2026-04-01",
            category: "Salary",
            amount: 50000,
            type: "income",
          },
          {
            id: 2,
            date: "2026-04-02",
            category: "Food",
            amount: 2000,
            type: "expense",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // 🔥 Dark mode fix
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const addTransaction = () => {
    const categories = ["Food", "Shopping", "Travel"];
    const newTxn = {
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      category: categories[Math.floor(Math.random() * categories.length)],
      amount: Math.floor(Math.random() * 5000),
      type: Math.random() > 0.5 ? "income" : "expense",
    };
    setTransactions([...transactions, newTxn]);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 dark:text-white transition">
      <div className="max-w-6xl mx-auto space-y-6">
        <Navbar role={role} setRole={setRole} dark={dark} setDark={setDark} />
        <Dashboard transactions={transactions} />
        <Charts transactions={transactions} />
        <Transactions
          transactions={transactions}
          role={role}
          addTransaction={addTransaction}
        />
        <Insights transactions={transactions} />
      </div>
    </div>
  );
}

export default App;