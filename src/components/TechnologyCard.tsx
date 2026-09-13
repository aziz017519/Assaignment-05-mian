import type { Technology } from "../types";
import { badgeClasses } from "../lib/badgeColors";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

function TechnologyCard({ technology, isAdded, onAdd }: TechnologyCardProps) {
  const { name, description, category, difficulty, rating, badge, icon } =
    technology;

  return (
    <div className="flex min-h-[250px] flex-col rounded-2xl border border-gray-100 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <img src={icon} alt={`${name} logo`} className="h-7 w-7" />
        <span className={`rounded-full px-2.5 py-1 text-[10px] ${badgeClasses(badge)}`}>
          {badge}
        </span>
      </div>

      <h3 className="mb-2 text-base font-semibold">{name}</h3>
      <p className="min-h-[60px] text-xs leading-relaxed text-slate-500">
        {description}
      </p>

      <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-2.5 text-[9px] text-slate-500">
        <span>{category}</span>
        <span>{difficulty}</span>
        <span>⭐ {rating}</span>
      </div>

      <button
        disabled={isAdded}
        onClick={() => onAdd(technology)}
        className={`mt-3 w-full rounded-md py-2.5 text-sm text-white transition ${
          isAdded
            ? "cursor-not-allowed bg-slate-300"
            : "bg-slate-900 hover:bg-slate-700"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologyCard;
