
export default function DivisionComponentes({ color }) {
  return (
    <div className="flex items-center justify-center py-8">
      <div
        className={`flex-grow border-t border-[${color}]`}
        style={{ borderColor: color }}
      ></div>
      <span className={`mx-2 text-[${color}]`} style={{ color: color }}>
        o
      </span>
      <div
        className={`flex-grow border-t border-[${color}]`}
        style={{ borderColor: color }}
      ></div>
    </div>
  );
}
