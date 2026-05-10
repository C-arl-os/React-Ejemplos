function CategoryFilter({ category, setCategory }) {
  return (
    <div className="filters">
      <button onClick={() => setCategory("Todos")}>Todos</button>
      <button onClick={() => setCategory("Frontend")}>Frontend</button>
      <button onClick={() => setCategory("Backend")}>Backend</button>
    </div>
  );
}

export default CategoryFilter;