const Insights = ({ transactions }) => {
  const expenses = transactions.filter(t => t.type === "expense");

  const map = {};
  expenses.forEach(t=>{
    map[t.category] = (map[t.category]||0)+t.amount;
  });

  const keys = Object.keys(map);
  const top = keys.length ? keys.reduce((a,b)=> map[a]>map[b]?a:b) : "N/A";

  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
      <h2 className="font-bold mb-2">📊 Insights</h2>
      <p>Top category: <b>{top}</b></p>
      <p>Total transactions: {transactions.length}</p>
    </div>
  );
};

export default Insights;