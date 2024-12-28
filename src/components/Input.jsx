export function Input({ ...props }) {
  return (
    <input
      {...props}
      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
    />
  );
}
