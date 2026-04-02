import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  PieChart, Pie, Cell,
  BarChart, Bar
} from "recharts";

const COLORS = ["#3b82f6", "#ef4444", "#22c55e"];

const Charts = ({ transactions }) => {

  const lineData = transactions.map((t, i) => ({
    name: `T${i+1}`,
    amount: t.amount
  }));

  const categoryMap = {};
  transactions.filter(t=>t.type==="expense").forEach(t=>{
    categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
  });

  const pieData = Object.keys(categoryMap).map(k=>({name:k,value:categoryMap[k]}));

  const card = "bg-white dark:bg-gray-800 p-3 rounded-xl shadow-md";

  return (
    <div className="grid md:grid-cols-3 gap-4">

      <div className={card}>
        <LineChart width={300} height={200} data={lineData}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <Line dataKey="amount" stroke="#3b82f6"/>
        </LineChart>
      </div>

      <div className={card}>
        <BarChart width={300} height={200} data={lineData}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <Bar dataKey="amount" fill="#22c55e"/>
        </BarChart>
      </div>

      <div className={card}>
        <PieChart width={300} height={200}>
          <Pie data={pieData} dataKey="value">
            {pieData.map((_, i)=>(
              <Cell key={i} fill={COLORS[i % COLORS.length]}/>
            ))}
          </Pie>
        </PieChart>
      </div>

    </div>
  );
};

export default Charts;