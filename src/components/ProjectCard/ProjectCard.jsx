import Image from 'next/image'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const ProjectCard = ({ imageUrl, imageAlt, gitHubLink, deployLink }) => {
  return (
    <div className="basis-1/3 flex-1 ">
      <Image
        src={imageUrl}
        alt={imageAlt}
        className="rounded-lg object-cover shadow-lg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
      <div className="flex justify-between mt-4">
        <a
          href={gitHubLink}
          target="_blank"
          rel="noreferrer"
          className="flex row bg-yellow-50 py-2 px-4 ounded-lg  justify-center items-center shadow-md hover:bg-yellow-100 transition-all rounded-lg dark:bg-gray-200 dark:hover:bg-gray-600"
        >
          <FaGithub className="mr-2" />
          Github
        </a>
        <a
          href={deployLink}
          target="_blank"
          rel="noreferrer"
          className="flex row bg-yellow-50 py-2 px-4 rounded-lg justify-center items-center shadow-md hover:bg-yellow-100 transition-all dark:bg-gray-200 dark:hover:bg-gray-600"
        >
          <FaExternalLinkAlt className="mr-2" />
          Deployed Site
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
