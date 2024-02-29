import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  ////state  to render content conditionnaly
const [projectsState,setProjectsState] =useState({

  selectedProjectId:undefined,
  projects:[],
  tasks:[]
});



function handleAddTask(){}

function handleDeleteTask(){}


function handleDeleteProject(){
  setProjectsState(prevState => {
    return {
      ...prevState,
      selectedProjectId:undefined,
      projects:prevState.projects.filter(
        (project)=> project.id !==prevState.selectedProjectId

      )

    }
  });
}



function handleSelectProject(id){
  setProjectsState(prevState => {
    return {
      ...prevState,
      selectedProjectId:id,

    }
  });

}






function handleStartAddProject(){
  setProjectsState(prevState => {
    return {
      ...prevState,
      selectedProjectId:null,

    }
  });

}

function handleCancelAddProject(){
  setProjectsState(prevState => {
    return {
      ...prevState,
      selectedProjectId:undefined,

    }
  });

}

function handleAddProject (projectData){
  setProjectsState(prevState => {
    const newProject = {
      ...projectData,
      id:Math.random()
    };

     return {
      ...prevState,
      selectedProjectId:undefined,
      projects : [...prevState.projects,newProject]
     }


  })
}
//console.log(projectsState);







const selectedProject =projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

let content =<SelectedProject 
project={selectedProject}  
onDelete={handleDeleteProject}
onAddTask={handleAddTask}
onDeleteTask={handleDeleteTask}

></SelectedProject>;


if (projectsState.selectedProjectId===null){
  content=<NewProject  onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  console.log(projectsState.selectedProjectId)

} else if (projectsState.selectedProjectId===undefined){
  content=<NoProjectSelected onStartAddProject={handleStartAddProject} />
  console.log(projectsState.selectedProjectId)

}

  return (
    <main className="h-screen my-8  flex gap-8">
      <ProjectsSidebar  
      onStartAddProject={handleStartAddProject}   
      projects={projectsState.projects}
      onSelectProject={handleSelectProject}
      />
    {content}
    </main>
  );
}

export default App;