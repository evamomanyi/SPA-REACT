import { useState } from "react";
import "../styles/AddProject.css";

function AddProject({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!title.trim() || !description.trim()) {
      return;
    }

    onAddProject(title, description);

    setTitle("");
    setDescription("");
  };

  return (
    <section className="section">
      <h2>Add New Project</h2>

      <input
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Add Project
      </button>
    </section>
  );
}

export default AddProject;