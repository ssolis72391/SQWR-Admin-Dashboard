export default function Button({ onClick, children }) {
  return (
    <button
      type="button"
      className="flex border-white border-2 text-white rounded-2xl px-5 py-3 lg:px-6 lg:py-4"
      onClick={onClick}
    >
      <span className="text-center">{children}</span>
    </button>
  );
}
