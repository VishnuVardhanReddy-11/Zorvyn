import { useState } from "react";

const Transactions = ({ transactions, role, addTransaction }) => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = transactions
    .filter((t) => filter === "all" || t.type === filter)
    .filter((t) =>
      (t.category || "").toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md mt-6">
      <h2 className="text-lg font-bold mb-3">📄 Transactions</h2>

      <input
        type="text"
        placeholder="Search category..."
        className="w-full border dark:border-gray-600 p-2 rounded mb-3 dark:bg-gray-700"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="border dark:border-gray-600 p-2 rounded mb-4 dark:bg-gray-700"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      {filtered.length === 0 ? (
        <p className="text-gray-400 text-center py-4">
          No transactions available
        </p>
      ) : (
        <table className="w-full text-left border rounded-lg overflow-hidden">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="p-3">Date</th>
              <th className="p-3">Category</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Type</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((t) => (
              <tr key={t.id} className="border-t hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="p-3">{t.date}</td>
                <td className="p-3 text-blue-500">{t.category}</td>
                <td className="p-3">₹{t.amount.toLocaleString()}</td>
                <td className={`p-3 ${t.type==="income"?"text-green-500":"text-red-500"}`}>
                  {t.type}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {role === "admin" && (
        <button
          onClick={addTransaction}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          ➕ Add Transaction
        </button>
      )}
    </div>
  );
};

export default Transactions;