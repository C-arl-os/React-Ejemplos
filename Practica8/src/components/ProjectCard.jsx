function ProjectCard({ name, description, status }) {
    return (
        <article className="project-card">
            <h3>{name}</h3>
            <p>{description}</p>
            <span className="badge">{status}</span>
        </article>
    );
}

export default ProjectCard;