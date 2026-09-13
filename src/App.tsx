import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import Footer from "./components/Footer";
import type { Technology } from "./types";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState<Technology[]>([]);

  // Load technology data from the local JSON file.
  // Using fetch (rather than a static import) so the loading state is real,
  // even if it only shows for a moment on localhost.
  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data: Technology[]) => setTechnologies(data))
      .catch(() => toast.error("Couldn't load technologies. Try refreshing."))
      .finally(() => setLoading(false));
  }, []);

  function handleAdd(technology: Technology) {
    const alreadyAdded = stack.some((t) => t.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack((prev) => [...prev, technology]);
    toast.success(`${technology.name} added to your stack.`);
  }

  function handleRemove(id: string) {
    const removed = stack.find((t) => t.id === id);
    setStack((prev) => prev.filter((t) => t.id !== id));
    if (removed) toast.info(`${removed.name} removed from your stack.`);
  }

  function handleRemoveAll() {
    if (stack.length === 0) return;
    setStack([]);
    toast.info("Stack cleared.");
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <TechnologySection
        technologies={technologies}
        loading={loading}
        stack={stack}
        onAdd={handleAdd}
        onRemove={handleRemove}
        onRemoveAll={handleRemoveAll}
      />
      <Footer />
    </div>
  );
}

export default App;
