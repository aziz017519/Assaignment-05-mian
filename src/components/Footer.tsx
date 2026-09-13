const FOOTER_GROUPS = [
  {
    title: "PRODUCT",
    links: ["", "Technologies", "Projects"],
  },
  {
    title: "COMPANY",
    links: ["About", "Contact", "Careers"],
  },
  {
    title: "LEGAL",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

function Footer() {
  return (
    <footer className="border-t border-gray-100 px-5 pb-5 pt-12 sm:px-[7%] sm:pt-[55px]">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 text-lg font-bold">
            <span className="flex h-[25px] w-[25px] items-center justify-center rounded-md bg-brand text-[10px] text-white">
              DS
            </span>
            <span>
              Dev <b className="bg-brand bg-clip-text text-transparent">Stack</b>
            </span>
          </div>

          <p className="my-4 max-w-[330px] text-xs leading-relaxed text-slate-400">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          <div className="flex gap-5 text-[11px] text-slate-500">
            <a href="#" className="hover:text-slate-800">GitHub</a>
            <a href="#" className="hover:text-slate-800">Twitter</a>
            <a href="#" className="hover:text-slate-800">LinkedIn</a>
          </div>
        </div>

        {FOOTER_GROUPS.map((group) => (
          <div key={group.title}>
            <h4 className="mb-4 text-[11px] font-semibold">{group.title}</h4>
            {group.links.map((link) => (
              <a
                key={link}
                href="#"
                className="mb-2.5 block text-[11px] text-slate-500 hover:text-slate-800"
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-3 border-t border-gray-100 pt-5 text-[10px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Dev Stack. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-700">Privacy</a>
          <a href="#" className="hover:text-slate-700">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
