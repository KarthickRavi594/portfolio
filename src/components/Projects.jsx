import React, { useState } from 'react';
import IBM from '../logo/IBM-Logo.png';
import QBurst from '../logo/Qburst-Logo.png';
import AG from '../logo/ag_logo.png';
import Hubino from '../logo/hubino.jpeg';
import Pathfinder from '../logo/pathfinder.jpeg';
import Toshiba from '../logo/toshiba.png';
const projects = [
    { "orgName": "Toshiba Software India pvt ltd", "skill": "Java", "period": "Jun 2015 - Nov - 2015", "title": "Finance Regimentation", "description": "The project is used to keep track of the (SOW) and to maintain the financial status", "Role": "Java Developer", "orgLogo": `${Toshiba}`, "responsibilities": "[Java Developer (Internship)] Developed the application using Java, Spring, Hibernate, and Oracle DB. Implemented RESTful APIs for data retrieval and manipulation." },
    { "orgName": "IBM India pvt ltd","skill": "Java", "period": "Jan 2017 - Jun - 2017", "title": "Certification As A Service", "description": "IBM product teams that use IBM JDK need to certify their product by running the JCK test suite.", "Role": "Java Developer", "orgLogo": `${IBM}`, "responsibilities": "[Java Developer (Internship)] Developed the application using Java, Spring, Hibernate, and Oracle DB. Implemented RESTful APIs for data retrieval and manipulation." },
    { "orgName": "Ariveguru technologies", "skill": "HTML, CSS, Angular JS", "period": "Jan 2018 - Sep 2019", "title": "Flip2Flex", "description": "Designed new designs for generating the offer list for other teams and their clients", "Role": "UI Developer", "orgLogo": `${AG}`, "responsibilities": "[UI Developer] Developed the application using Angular JS, HTML, CSS, and JavaScript. Implemented responsive design and ensured cross-browser compatibility. Communicated with my senior developer and fix the tasks that were assigned by my senior developer within the time." },
    { "orgName": "Ariveguru technologies", "skill": "HTML, CSS, Vue JS", "period": "Jul 2018 - Jan 2019", "title": "Sharanasangama App", "description": "PWA application both mobile browser and desktop browser for a community based social media.", "Role": "UI Developer", "orgLogo": `${AG}`, "responsibilities": "[UI Developer] Developed the application using Vue, HTML, CSS, and JavaScript. Implemented responsive design and ensured cross-browser compatibility. Communicated with my senior developer and fix the tasks that were assigned by my senior developer within the time." },
    { "orgName": "Pathfinder Global","skill": "React, Redux, and Node", "period": "Oct 2019 - Jul 2020", "title": "Proleaz_Dashboard", "description": "Developed the dashboard to provide the data in chart and table representations.", "Role": "Software Developer", "orgLogo": `${Pathfinder}`, "responsibilities": "[Software Developer] Handling a Team of 7 members, assigning the task, and reporting the status to the manager. Also, need to communicate with clients regarding the status and explain to them the logic behind the functionalities. Testing the application at the unit level and uploading it to the live server and production server." },
    { "orgName": "Hubino","skill": "Node", "period": "May 2021 - May 2021", "title": "Apple pass", "description": "It is a wallet pass (Equivalent to QR Code) generation service.", "Role": "Software Developer", "orgLogo": `${Hubino}`, "responsibilities": "[Software Developer] Developed the application using Node.js. Implemented features for generating and managing Apple Wallet passes with users information." },
    { "orgName": "Hubino","skill": "Angular", "period": "May 2021 - Jul 2021", "title": "Experience Builder", "description": "A web application to show the concept skills with hierarchy relationship diagrams using joint technology.", "Role": "Software Developer", "orgLogo": `${Hubino}`, "responsibilities": "[Software Developer] Handling a team of two members and gathering requirements from the vendor organization. Explaining and assigning tasks to the team. Daily status follows up with the team and effectively manages their work by following AGILE methodologies." },
    { "orgName": "Hubino","skill": "React, Node, and AWS", "period": "Jul 2020 - Jan 2021", "title": "Rozie Care Agents", "description": " Planned real-time guidance and implemented soft phone features using Angular and AWS.", "Role": "Software Developer", "orgLogo": `${Hubino}`, "responsibilities": "[Software Developer] Responsible for designing, developing, deploying, and maintaining the end-to-end service from scratch." },
    { "orgName": "Hubino","skill": "React, Redux, and Node", "period": "Feb 2021 - Nov 2021", "title": "Xago", "description": "Built live trading dashboards for XRP and ZAR currencies.", "Role": "Software Developer", "orgLogo": `${Hubino}`, "responsibilities": "[Software Developer] Developed the application using React, Redux, and Node.js. Implemented real-time data updates and user authentication. Contributed to development and deployment with a team of five members." },
    { "orgName": "QBurst Technologies","skill": "React and Redux", "period": "Jan 2022 - Nov 2022", "title": "Store Portal", "description": "Delivered the drag and drop components with dynamic size of layout changes.", "Role": "Tech Lead", "orgLogo": `${QBurst}`, "responsibilities": "[Tech Lead] Led a team of 5 developers, overseeing project architecture and design. Implemented drag-and-drop functionality using React and Redux. Coordinated with stakeholders to gather requirements and ensure timely delivery. Developed drag-and-drop functionality from child to parent components. Developed reusable components for detailed view pages with multiple props." },
    { "orgName": "QBurst Technologies","skill": "React, Redux, and Node", "period": "Nov 2022 - Apr 2023", "title": "NYU Langone", "description": "Automated student DB updates; developed UI enhancements in React and Node.", "Role": "Full Stack", "orgLogo": `${QBurst}`, "responsibilities": "[Full Stack Developer] Developed the application using React, Node.js, and MongoDB. Implemented user authentication and authorization. Designed and developed RESTful APIs for data retrieval and manipulation. Developed an individual script to update the DB information CSV file. Developed the difference between the clerkship and pre-clerkship details to the student's perspective." },
    { "orgName": "QBurst Technologies","skill": "KO.js", "period": "May 2023 - Jan 2025", "title": "MediaOcean", "description": "Designed modular UI components, export features, and cost-type automation.", "Role": "Front End", "orgLogo": `${QBurst}`, "responsibilities": "[Front End Developer] Developed the application using React, Redux, and KO. Implemented modular UI components for better maintainability. Developed export features for data in various formats. Automated cost-type calculations and reporting. Developed clear lines of instances for the programmatic packages and lines of integration to the existing campaigns.Developed a script to handle the cost type with commissionable or non-commissionable based on the client's selection for the campaigns. Developed the clear line providers for the programmatic package for the clear line features. Developed the export functionality for the history page. Developed the feature for clear line pacing selection." },
    { "orgName": "QBurst Technologies", "skill": "React, and Redux", "period": "Feb 2025 - Present", "title": "Document Management System", "description": "Built PDF viewer integration with SharePoint and S3 using React and Apryse.", "Role": "Module Lead", "orgLogo": `${QBurst}`, "responsibilities": "[Module Lead] Leading a team of 4 developers, overseeing module architecture and design. Implemented PDF viewer integration with SharePoint and S3 using React and Apryse. Coordinated with stakeholders to gather requirements and ensure timely delivery. Developed reusable components for document management features. Contribute to the technical design and implementation of the assigned modules.Coordinates the work and ensures that tasks are completed on time. Participates in project planning and contributes to the development of timelines." },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="pb-10 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((proj) => (
                        <button
                            key={proj.title}
                            type="button"
                            className="bg-white rounded-lg shadow-md p-6 flex flex-col cursor-pointer text-left focus:outline-none"
                            onClick={() => setSelectedProject(proj)}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold">{proj.title}</h3>
                                    <span className="text-sm text-gray-500">{proj.period}</span>
                                </div>
                                <div>
                                    <img src={proj.orgLogo} alt={proj.orgName} className="w-12 h-12 mr-4" />
                                </div>
                            </div>
                            <p className="text-gray-700">{proj.description}</p>
                            <p className="mb-2 py-2"><span className="font-semibold">Skill:</span> {proj.skill}</p>
                        </button>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full relative">
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                            onClick={() => setSelectedProject(null)}
                        >
                            &times;
                        </button>
                        <div className="flex items-center  mb-4">
                            <img src={selectedProject.orgLogo} alt={selectedProject.orgName} className="w-14 h-14" />
                            <div className="ml-3 flex flex-col">
                                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                                <span className="text-sm text-gray-500">{selectedProject.period}</span>
                            </div>
                        </div>
                        <p className="mb-2 py-2"><span className="font-semibold">Organization:</span> {selectedProject.orgName}</p>
                        <p className="mb-2 py-2"><span className="font-semibold">Role:</span> {selectedProject.Role}</p>
                        <p className="mb-2 py-2"><span className="font-semibold">Responsibilities:</span> {selectedProject.responsibilities}</p>
                        <p className="mb-2 py-2"><span className="font-semibold">Description:</span> {selectedProject.description}</p>
                        <p className="mb-2 py-2"><span className="font-semibold">Skill:</span> {selectedProject.skill}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;