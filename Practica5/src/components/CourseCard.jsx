import "./CourseCard.css";

function CourseCard({ course, setSelectedCourse, updateProgress }) {
  return (
    <div className="course-card">
      <h2>{course.title}</h2>

      <p>
        <strong>Categoría:</strong> {course.category}
      </p>
      <p>
        <strong>Nivel:</strong> {course.level}
      </p>
      <p>
        <strong>Duración:</strong> {course.duration}
      </p>
      <p>{course.description}</p>

      <button onClick={() => setSelectedCourse(course)}>Ver detalles</button>

      <button onClick={() => updateProgress(course.id)}>
        Avanzar Progreso
      </button>

      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${course.progress}%` }}
        ></div>
      </div>

      <p>{course.progress}% completado</p>
    </div>
  );
}

export default CourseCard;
