import { useState } from "react";

function useProjects() {
  const [projects, setProjects] = useState([
    {
      id: 101520240000,
      title: "Nem Mobile Banking Application",
      description: "A new mobile banking application that allows customers tobank from anywhere."
    },
    {
      id: 121720251300,
      title: "PAPSS Enhancement",
      description: "A project to improve the current setup"
    },
    {
      id: 31520261535,
      title: "Daily NSE report publishing project",
      description: "A portal for publishing daily NSE reports for customers to access"
    },
    {
      id: 111620260400,
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
