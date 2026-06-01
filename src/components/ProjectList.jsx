import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  return (
    <section>
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default ProjectList;