import Button from "./Button";

export default function ProjectsSideBar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="bg-stone-900 text-stone-50 rounded-r-xl w-1/3 md:w-72 px-8 py-16">
      <h2 className="mb-8 font-bold uppercase md:text-xl md text-stone-200">
        Your Projects
      </h2>
      <Button onClick={onStartAddProject}>+ Add Project</Button>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClass =
            "w-full text-left px-2 py-1 rounded-lg my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800";

          if (selectedProjectId === project.id) {
            cssClass += " text-stone-200 bg-stone-800";
          } else {
            cssClass += " text-stone-400";
          }

          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClass}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
