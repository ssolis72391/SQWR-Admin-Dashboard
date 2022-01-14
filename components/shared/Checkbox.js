export default function Checkbox({ id, onChange, checked, label, hidden }) {
  return (
    <label className="inline-flex items-center" htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        className="md:w-8 w-4 md:h-8 h-4 rounded-sm md:rounded-md border-1 md:border-3 bg-grey-dark text-grey-dark"
        onChange={onChange}
        checked={checked}
      />
      <span className={`ml-2 ${hidden && 'hidden'}`}>{label}</span>
    </label>
  );
}
