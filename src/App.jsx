import { useState } from 'react'


function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Nem Mobile Banking Application",
      description: "A new mobile banking application that allows customers tobank from anywhere."
    },
    {
      id: 2,
      title: "PAPSS Enhancement",
      description: "A project to improve the current setup"
    },
    {
      id: 3,
      title: "Daily NSE report publishing project",
      description: "A portal for publishing daily NSE reports for customers to access"
    },
    {
      id: 4,
      title: "Sales Representatives Application Project",
      description: "A project to build an application that helps sales representatives to collect data from the field."
    }

  ]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const addProject = () => {
    if (!title || !description) return;

    const newProject = {
      id: Date.now(),
      title,
      description
    };

    setProjects([...projects, newProject]);

    setTitle("");
    setDescription("");
  };
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='container'>
      <header>
        <h1>Core Banking Squad Projects</h1>
        <p>Portfolio for all our projects</p>
      </header>

      <section className="add-project">
        <h2>Add New Project</h2>
        <input type="text" placeholder='Project Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea placeholder='Project Description' value={description} onChange={(e) => setDescription(e.target.value)}/>
          <button onClick={addProject}>Add Project</button>
      </section>
      
      <section className='search'>
        <h2>Search Projects</h2>
        <input type='text' placeholder='Search by title.....' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      </section>

      <section className='project-list'>
        <h2>Projects</h2>
        {filteredProjects.length === 0 ? (
          <p>No projects found.</p>          
        ) : (
          filteredProjects.map((project) => (
            <div className='card' key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))
        )}
      </section>
    </div>
  );
}

export default App
