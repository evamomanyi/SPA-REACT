import { useState } from "react";

function useProjects() {
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

  const addProject = (title, description) => {
    const newProject = {
      id: Date.now(),
      title,
      description
    };

    setProjects((prevProjects) => [...prevProjects, newProject]);
  };

  return {
    projects,
    addProject
  };
}
export default useProjects
