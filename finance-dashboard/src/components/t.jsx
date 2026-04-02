const t = ({ role, setRole, dark, setDark }) => {
  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
      <h1 className="text-xl font-bold">💰 Finance Dashboard</h1>

      <div className="flex gap-3 items-center">
        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
        >
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border p-2 rounded dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>
    </div>
  );
};

export default t;