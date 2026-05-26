import { useState } from 'react';

import SearchInput from '../components/SearchInput';
import ProjectCard from '../components/ProjectCard';

import { projects } from '../data/projects';

function ProjectsPage() {
  const [search, setSearch] = useState('');

  const filteredProjects = projects.filter((project) =>
    project.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section>
      <h2>Projects</h2>

      <SearchInput
        value={search}
        onChange={(event) =>
          setSearch(event.target.value)
        }
        placeholder="Search projects..."
      />

      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              status={project.status}
            />
          ))
        ) : (
          <p className="empty-message">
            No projects found.
          </p>
        )}
      </div>
    </section>
  );
}

export default ProjectsPage;