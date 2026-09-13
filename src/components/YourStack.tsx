import type { Technology } from "../types";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

function YourStack({ stack, onRemove, onRemoveAll }: YourStackProps) {
  return (
    <aside className="sticky top-[90px] h-fit rounded-2xl border border-gray-100 p-5">
      <h3 className="text-[15px] font-semibold">Your Stack</h3>
      <p className="mb-4 mt-1 text-[11px] text-slate-400">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <p className="rounded-md border border-dashed border-gray-200 p-4 text-center text-xs text-slate-400">
          No technologies added yet. Pick a few from the list to build your
          stack.
        </p>
      ) : (
        <div>
          {stack.map((tech) => (
            <div
              key={tech.id}
              className="mb-2 flex items-center justify-between rounded-md border border-gray-200 p-2.5 text-xs"
            >
              <div className="flex items-center gap-2">
                <img src={tech.icon} alt="" className="h-4 w-4" />
                <div>
                  <p className="font-medium">{tech.name}</p>
                  <p className="text-[10px] text-slate-400">
                    {tech.category}
                  </p>
                </div>
              </div>
              <button
                aria-label={`Remove ${tech.name}`}
                onClick={() => onRemove(tech.id)}
                className="cursor-pointer text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={onRemoveAll}
        disabled={stack.length === 0}
        className="mt-4 w-full rounded-md border border-red-200 bg-white py-2 text-sm text-red-500 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Remove All
      </button>
    </aside>
  );
}

export default YourStack;
