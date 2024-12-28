export function Tab({ status, label, count, activeTab, onClick }) {
  return (
    <button
      key={status}
      onClick={() => onClick(status)}
      className={`flex items-center gap-2 ${
        activeTab === status ? "text-blue-600" : "text-gray-500"
      }`}
    >
      {label}
      {count > 0 && (
        <span className="bg-gray-100 px-2 py-0.5 rounded-full text-sm">
          {count}
        </span>
      )}
    </button>
  );
}
