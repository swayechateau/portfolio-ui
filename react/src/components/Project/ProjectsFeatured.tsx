import { ITranslatedProject } from '../../interfaces'
import ProjectCard from './ProjectCard'

interface IFeaturedProjects {
    projects: ITranslatedProject[]
}

function ProjectsFeatured({ projects }: IFeaturedProjects) {
    return (
        <div className='p-4 flex flex-col relative overflow-x-hidden'>
            <h1> Featured Projects </h1>
            <div className='grid px-4 gap-4 grid-cols-1 md:grid-cols-2'>
                {projects.map(project => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </div>
    )
}

export default ProjectsFeatured