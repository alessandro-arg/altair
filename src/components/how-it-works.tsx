import { AnimatePresence, motion } from "motion/react";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { BorderBeam } from "./ui/border-beam";

const steps = [
  {
    number: "01",
    title: "Connect your project",
    description:
      "Import from GitHub or start fresh. Altair indexes your codebase so AI understands the full picture.",
  },
  {
    number: "02",
    title: "Describe what you want",
    description:
      "Tell Altair what to build or fix in plain language. It reasons through the problem and plans the work.",
  },
  {
    number: "03",
    title: "Review and ship",
    description:
      "Review AI-generated changes with inline diffs, approve what you want, and push to production.",
  },
];

export const HowItWorks = () => (
  <section
    id="how-it-works"
    className="py-24 px-4 sm:px-6 border-t border-white/6"
  >
    <div className="mx-auto max-w-5xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: text */}
        <div>
          <Badge
            variant="outline"
            className="mb-4 border-white/10 bg-white/5 text-white/50 text-xs"
          >
            How it works
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5">
            From idea to running code in minutes
          </h2>
          <p className="text-white/40 text-sm leading-relaxed mb-10">
            Altair removes the friction between thinking and shipping. No
            boilerplate, no config hell — just focus on building.
          </p>

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={step.number} className="flex gap-5">
                <div className="shrink-0 size-8 rounded-full border border-white/8 bg-white/5 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white/40">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">
                    {step.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: placeholder visual */}
        <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
          <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
          <div className="aspect-4/3 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key="image-id"
                initial={{ opacity: 0, y: 6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md"
              >
                <Image
                  src="/logo.png"
                  className="size-full object-cover object-top-left dark:mix-blend-lighten"
                  alt="altair image"
                  width={1207}
                  height={929}
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <BorderBeam
            duration={6}
            size={200}
            className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
          />
        </div>
      </div>
    </div>
  </section>
);
