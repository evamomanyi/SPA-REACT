import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';

function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: 'React Portfolio', description: 'Portfolio website', category: 'Web Development', image: '' }
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const addProject = (project) => setProjects([...projects, project]);

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Portfolio Platform</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProjectForm addProject={addProject} />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;
