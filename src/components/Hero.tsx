
function Hero() {
  return (
    <section className="flex flex-col items-center justify-between gap-10 px-5 py-12 sm:px-[7%] sm:py-[70px] lg:flex-row">
      <div className="max-w-[600px] text-center lg:text-left">
        <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-[52px]">
          Build Your Ideal
          <span className="mt-1 block bg-brand bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="max-w-[580px] text-base leading-relaxed text-slate-500">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        <div className="mt-9 flex justify-center gap-3 lg:justify-start">
          <button className="rounded-lg bg-brand px-5 py-3 text-white">
            Explore Technologies
          </button>
          <button className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-slate-600">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex h-[260px] w-[290px] items-center justify-center sm:h-[300px] sm:w-[330px]">
<img src="/banner-stack.png" alt="Dev stack illustration" />
      </div>
    </section>
  );
}

export default Hero;
