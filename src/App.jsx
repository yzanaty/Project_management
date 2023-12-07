import { useState } from "react";
import NewProject from "./components/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";
import ProjectsSideBar from "./components/ProjectsSideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: Math.random(),
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }
  function handleDeleteTask(taskId) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== taskId),
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    const project = {
      ...projectData,
      id: Math.random(),
    };

    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, project],
      };
    });
  }

  function handleCancelProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  let content;
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onCancel={handleCancelProject}
        onAddProject={handleAddProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else {
    content = (
      <SelectedProject
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        onDelete={handleDeleteProject}
        project={projectsState.projects.find(
          (project) => project.id === projectsState.selectedProjectId
        )}
        tasks={projectsState.tasks.filter(
          (task) => task.projectId === projectsState.selectedProjectId
        )}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar
        onSelectProject={handleSelectProject}
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
