import Project from './Project'
import { projectsData } from '../data/projectsData'

function Projects() {
  return (
    <div>
      <h2 className="font-bold text-lg mb-3.5">Projects</h2>
      {
        projectsData.map(project => {
          return <Project key={project.id} link={project.link} name={project.name} img={project.img} info={project.info} />
        })
      }
      
    </div>
  )
}

export default Projects