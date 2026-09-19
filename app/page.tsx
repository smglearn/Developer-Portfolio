import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  status: string;
  tags: string[];
  href: string;
}

const projects: Project[] = [
  {
    title: "PC Support Toolkit",
    description: "Diagnostic flows, quick clipboard triage commands, and persistent client repair logs.",
    status: "v1.0 Production",
    tags: ["Next.js 16", "React 19", "Tailwind CSS", "localStorage"],
    href: "http://localhost:3000",
  },
  {
    title: "Glenn's Gaming Hub",
    description: "Personal game backlog tracker, session logging, and hardware performance profiles.",
    status: "Planning",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "#",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 p-8 md:p-12">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Header */}
        <header className="border-b border-neutral-800 pb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white">Developer Portfolio</h1>
              <p className="text-neutral-400 text-sm mt-1">
                High-performance developer tools, systems engineering, and custom web applications.
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded border border-neutral-800 bg-neutral-900 text-neutral-300">
              Apple Silicon M4 Native
            </span>
          </div>
        </header>

        {/* Project Showcase Grid */}
        <section className="space-y-4">
          <h2 className="text-sm uppercase tracking-wider font-semibold text-neutral-400">
            Engineered Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <div
                key={project.title}
                className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded border border-emerald-900/50 bg-emerald-950/40 text-emerald-400">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-100 mb-2">{project.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{project.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono bg-black/50 text-neutral-400 px-2 py-0.5 rounded border border-neutral-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.href !== '#' && (
                    <Link
                      href={project.href}
                      target="_blank"
                      className="text-xs text-sky-400 hover:text-sky-300 font-medium ml-2 shrink-0"
                    >
                      View App →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
