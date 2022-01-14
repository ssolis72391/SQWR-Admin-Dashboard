export default function DonutLabel({ color, label, value }) {
  return (
    <div>
      <div className="flex flex-row">
        <div
          className="rounded-sm mr-2 w-3 h-3 "
          style={{ backgroundColor: color }}
        />
        <span className="text-xxs lg:text-xs">{label}</span>
      </div>
      <p className="text-2xl lg:text-3xl font-semibold mt-2">{value}</p>
    </div>
  );
}
