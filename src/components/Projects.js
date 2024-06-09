import React, { useState } from 'react';

const projectsData = [
  {
    imageSrc: './images/Rentice cover.png',
    title: 'Rentice',
    description: 'Real Estate website',
    details: 'Rentice is a comprehensive real estate platform that connects buyers and sellers, offering a seamless experience in property transactions. With advanced search options and detailed property listings, it caters to all real estate needs.',
    link: 'https://rentice.com.ng/',
  },
  {
    imageSrc: './images/PhishSence.png',
    title: 'Phishsense',
    description: 'Verified Links for a Safety',
    details: 'Phishsense provides a secure browsing experience by verifying links and protecting users from phishing attacks. It ensures that all links are safe to click, enhancing online security.',
    link: 'https://phish-sense-43ei.vercel.app/',
  },
  {
    imageSrc: './images/Gyft.png',
    title: 'Gyft',
    description: 'Special gift for friends & family',
    details: 'Gyft offers a unique platform for sending personalized gifts to loved ones. From custom messages to specially curated gift boxes, Gyft makes every occasion memorable.',
    link: 'https://www.gyft.ng/',
  },
  {
    imageSrc: './images/NexaScale LMS.png',
    title: 'NexaScale',
    description: 'Learning management system',
    details: 'NexaScale is a robust learning management system designed to streamline educational processes. It provides tools for course creation, student management, and performance tracking.',
    link: '#',
  },
  {
    imageSrc: './images/Health.png',
    title: 'Healthcare',
    description: 'Healthcare Data management',
    details: 'Our Healthcare Data Management system is designed to efficiently handle patient records, appointments, and billing. It ensures data security and accessibility for healthcare providers.',
    link: '#',
  },
  {
    imageSrc: './images/SpaceTech.png',
    title: 'SpaceTech',
    description: 'Stay up to date with Tech',
    details: 'SpaceTech keeps you updated with the latest advancements in technology and space exploration. It features articles, news, and insights from industry experts.',
    link: '#',
  },
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div id="projects" className="py-10">
      <h1 className="text-center text-3xl font-semibold text-blue-500 mb-10">Projects</h1>
      <div className="flex flex-wrap justify-center gap-10 px-10">
        {projectsData.map((project, index) => (
          <div key={index} className="card bg-white p-5 rounded-lg shadow-md w-80 transition-transform transform hover:translate-y-[-10px] hover:shadow-lg">
            <img src={project.imageSrc} alt={project.title} className="rounded-t-lg" />
            <h3 className="font-bold text-xl mt-5">{project.title}</h3>
            <p className="mt-2 text-gray-600">
              {project.description} <a href={project.link} className="text-blue-500">view</a>
            </p>
            {expandedIndex === index && (
              <div className="mt-2 transition-all duration-500 ease-in-out">
                <p className="text-gray-600">{project.details}</p>
              </div>
            )}
            <button 
              onClick={() => handleReadMore(index)} 
              className="mt-5 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              {expandedIndex === index ? 'Read Less' : 'Read More'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
