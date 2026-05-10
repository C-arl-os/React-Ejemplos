function CourseDetail({ selectedCourse, setSelectedCourse }) {
  if (!selectedCourse) {
    return null;
  }

  return (
    <div className="course-detail">
      <h2>{selectedCourse.title}</h2>

      <p>{selectedCourse.description}</p>

      <p><strong>Categoría:</strong> {selectedCourse.category}</p>
      <p><strong>Nivel:</strong> {selectedCourse.level}</p>
      <p><strong>Duración:</strong> {selectedCourse.duration}</p>

      <button onClick={() => setSelectedCourse(null)}>
        Cerrar detalle
      </button>
    </div>
  );
}

export default CourseDetail;