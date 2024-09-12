import React from 'react'

type Project = {
    id: number;
    title: string;
    image: string;
    previewLink: string;
    codeLink: string;
  };
  const projects: Project[] = [
    {
      id: 1,
      title: 'Versey',
      image: '../images/background.jpg',
      previewLink: 'https://versey.vercel.app/',
      codeLink: 'https://github.com/amondor/Versey',
    },
    
    {
      id: 2,
      title: 'React Shop',
      image: '../public/background.jpg',
      previewLink: 'https://react-shop-amondor.vercel.app/',
      codeLink: 'https://github.com/amondor/react-shop',
    },
    {
      id: 3,
      title: 'React Football',
      image: '../public/background.jpg',
      previewLink: 'https://react-football.vercel.app/',
      codeLink: 'https://github.com/amondor/react-football',
    },
    {
      id: 4,
      title: 'Blog React',
      image: '../public/background.jpg',
      codeLink: 'https://github.com/amondor/blog-react',
      previewLink: 'https://amondor.github.io/blog-react/',
    },
    {
      id: 5,
      title: 'Astro kitties',
      image: '../public/background.jpg',
      previewLink: 'https://astro-kitties.vercel.app/',
      codeLink: 'https://github.com/amondor/check-test',
    },
    {
      id: 5,
      title: 'React Blog',
      image: '../public/background.jpg',
      previewLink: 'https://blog-react-vert.vercel.app/',
      codeLink: 'https://github.com/amondor/blog-react',
    },
    // Ajoute d'autres projets ici
  ];
  
  type ProjectCardProps = {
    title: string;
    image: string;
    previewLink: string;
    codeLink: string;
  };
  
  function ProjectCard({ title,  previewLink, codeLink }: ProjectCardProps) {
  return (
    <div className="bg-[url('./images/background.jpg')] h-[350px]  relative bg-cover bg-center 
    rounded-lg overflow-hidden shadow-lg">
      dsmbhgvcfxdsz
      
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
        {/* Titre du projet */}
        <h2 className="text-white text-2xl font-bold">{title}</h2>
        <div className="flex justify-between items-center mt-4">
       
          {/* Lien Code */}
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold hover:text-gray-300"
          >
            Voir le code
          </a>
             {/* Bouton Preview */}
             <a
            href={previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-green-500 font-bold hover:text-green-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            Voir le projet
          </a>
        </div>
      </div>
    </div>
  )
}
function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 md:w-3/4 mx-auto">
    
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          image={project.image}
          previewLink={project.previewLink}
          codeLink={project.codeLink}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;
