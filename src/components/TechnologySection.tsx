import type { Technology } from "../types";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

interface TechnologySectionProps {
  technologies: Technology[];
  loading: boolean;
  stack: Technology[];
  onAdd: (technology: Technology) => void;
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

function TechnologySection({
  technologies,
  loading,
  stack,
  onAdd,
  onRemove,
  onRemoveAll,
}: TechnologySectionProps) {
  const stackIds = new Set(stack.map((t) => t.id));

  return (
    <section id="technologies" className="px-5 pb-16 pt-8 sm:px-[7%] sm:pb-[100px]">
      <div className="mb-9">
        <h2 className="mb-2 text-2xl font-bold sm:text-3xl">
          Explore the <span className="text-brand-pink">Technologies</span>
        </h2>
        <p className="text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_250px]">
        {loading ? (
          <div className="flex min-h-[250px] items-center justify-center text-sm text-slate-400">
            Loading technologies…
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => (
              <TechnologyCard
                key={tech.id}
                technology={tech}
                isAdded={stackIds.has(tech.id)}
                onAdd={onAdd}
              />
            ))}
          </div>
        )}

        <YourStack stack={stack} onRemove={onRemove} onRemoveAll={onRemoveAll} />
      </div>
    </section>
  );
}

export default TechnologySection;
