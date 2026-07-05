import { motion } from "framer-motion";

export type PortfolioTabId = "projects" | "certificates" | "techstack";

interface Tab {
  id: PortfolioTabId;
  label: string;
}

const tabs: Tab[] = [
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "techstack", label: "Tech Stack" },
];

interface PortfolioTabsProps {
  active: PortfolioTabId;
  onChange: (id: PortfolioTabId) => void;
}

function PortfolioTabs({ active, onChange }: PortfolioTabsProps) {
  return (
    <div className="flex justify-center mb-12">
      <div className="glass-card inline-flex items-center gap-1 p-1.5 rounded-full flex-wrap justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`relative px-5 py-2.5 text-sm font-medium rounded-full transition-colors duration-300 ${
              active === tab.id
                ? "text-white"
                : "text-slate-400 hover:text-glow-300"
            }`}
          >
            {active === tab.id && (
              <motion.span
                layoutId="portfolio-tab-active"
                className="absolute inset-0 rounded-full bg-primary-600 shadow-glow"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default PortfolioTabs;
