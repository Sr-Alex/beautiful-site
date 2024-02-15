import ProjectMiniature from "./ProjectMiniature";

function ProjectsContainer() {
  return (
    <ul className="flex flex-wrap justify-around w-full py-4 gap-8">
      {Array.from({ length: 4 }).map((_, index) => (
        <ProjectMiniature key={index} />
      ))}
    </ul>
  );
}

export default ProjectsContainer;
