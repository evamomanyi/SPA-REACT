import "../styles/SearchBar.css";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <section className="search-section">
      <h2>Search Projects</h2>

      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </section>
  );
}

export default SearchBar;