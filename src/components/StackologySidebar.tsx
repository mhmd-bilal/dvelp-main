import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const technologies = [
  { id: "react", name: "React", logo: "⚛️" },
  { id: "vue", name: "Vue", logo: "🟢" },
  { id: "angular", name: "Angular", logo: "🟥" },
  { id: "nextjs", name: "Next.js", logo: "▲" },
  { id: "express", name: "Express", logo: "🚂" },
  { id: "django", name: "Django", logo: "🐍" },
  { id: "fastapi", name: "FastAPI", logo: "⚡" },
  { id: "mongodb", name: "MongoDB", logo: "🍃" },
  { id: "postgresql", name: "PostgreSQL", logo: "🐘" },
];

const projectTypes = [
  "Landing Page",
  "Blog",
  "SaaS App",
  "Dashboard",
  "Real-time Chat",
  "E-commerce",
];

interface StackologySidebarProps {
  selectedTechs: string[];
  onTechSelect: (techs: string[]) => void;
  selectedProject: string;
  onProjectSelect: (project: string) => void;
}

export default function StackologySidebar({
  selectedTechs,
  onTechSelect,
  selectedProject,
  onProjectSelect,
}: StackologySidebarProps) {
  const handleTechToggle = (techId: string) => {
    const newTechs = selectedTechs.includes(techId)
      ? selectedTechs.filter((id) => id !== techId)
      : [...selectedTechs, techId];
    onTechSelect(newTechs);
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-16 h-full overflow-y-auto w-full bg-black/5 dark:bg-black/20 border-1 border-accent rounded-lg p-8 flex flex-col gap-8"
    >
      <div className="flex flex-col gap-8">
        {/* Technologies Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Technologies</h2>
          <div className="grid grid-cols-2 gap-3">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent cursor-pointer"
                onClick={() => handleTechToggle(tech.id)}
              >
                <Checkbox
                  id={tech.id}
                  checked={selectedTechs.includes(tech.id)}
                  onCheckedChange={() => handleTechToggle(tech.id)}
                />
                <label
                  htmlFor={tech.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                >
                  <span>{tech.logo}</span>
                  {tech.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Project Type Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Project Type</h2>
          <Select value={selectedProject} onValueChange={onProjectSelect}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              {projectTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </motion.section>
  );
} 