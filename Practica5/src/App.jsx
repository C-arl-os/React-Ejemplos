import { courses as coursesData } from "./data/courses";
import CourseCard from "./components/CourseCard";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";

import CourseDetail from "./components/CourseDetail";
function App() {
  // Estado para almacenar el término de búsqueda
  const [search, setSearch] = useState("");
  // Estado para almacenar la categoría seleccionada

  const [category, setCategory] = useState("Todos");
  // Estado para almacenar el curso seleccionado

  const [selectedCourse, setSelectedCourse] = useState(null);

  // Estado para almacenar los cursos, incluyendo su progreso
  const [courses, setCourses] = useState(() => {
    const savedCourses = localStorage.getItem("courses");
    return savedCourses ? JSON.parse(savedCourses) : coursesData;
  });

  // Filtrar cursos según búsqueda y categoría
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = 
      category === "Todos" || course.category === category;
    return matchesSearch && matchesCategory;
  });

  // Función para actualizar el progreso de un curso
  const updateProgress = (id) => {

    const updatedCourses = courses.map((course) => {

      if (course.id === id) {

        return {
          ...course,
          progress:
            course.progress >= 100
              ? 100
              : course.progress + 10
        };

      }

      return course;

    });

    setCourses(updatedCourses);

};
useEffect(() => {

  localStorage.setItem(
    "courses",
    JSON.stringify(courses)
  )

}, [courses]);


  return (
    <div className="courses-container">
      <h1>EduPlatform</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <CategoryFilter category={category} setCategory={setCategory} />
        
       
      {
        filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            setSelectedCourse={setSelectedCourse}
            updateProgress={updateProgress}
          />
        ))
      }
      
       {
      selectedCourse && (
        <CourseDetail
        selectedCourse={selectedCourse}
        setSelectedCourse={setSelectedCourse}
      />
      )
    }
    </div>
  );
}

export default App;