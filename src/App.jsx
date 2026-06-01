import { useState } from "react";

import Header from "./components/Header";
import AddProject from "./components/AddProject";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

import useProjects from "./hooks/useProjects";

import "./styles/App.css";

function App() {
  const { projects, addProject } = useProjects();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <Header />

      <AddProject
        onAddProject={addProject}
      />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <ProjectList
        projects={filteredProjects}
      />
    </div>
  );
}

export default App;
