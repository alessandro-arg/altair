import { Spinner } from "@/components/ui/spinner";
import { useProjectsPartial } from "../hooks/use-projects";
import { Kbd } from "@/components/ui/kbd";

interface ProjectsListProps {
  onViewAll: () => void;
}

export const ProjectsList = ({ onViewAll }: ProjectsListProps) => {
  const projects = useProjectsPartial(6);

  if (projects === undefined) {
    return <Spinner className="size-4 text-ring" />;
  }

  return (
    <div className="flex flex-col gap-4">
      {projects.length > 0 && (
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm text-muted-foreground">
              Recent Projects
            </span>
            <button className="flex items-center gap-2 text-muted-foreground text-xs hover:text-foreground transition-colors">
              <span>View all</span>
              <Kbd className="bg-accent border">Ctrl + K</Kbd>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
