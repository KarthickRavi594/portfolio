import React from 'react';
import IBM from '../logo/IBM-Logo.png';
import QBurst from '../logo/Qburst-Logo.png';
import AG from '../logo/ag_logo.png';
import Hubino from '../logo/hubino.jpeg';
import Pathfinder from '../logo/pathfinder.jpeg';
import Toshiba from '../logo/toshiba.png';
const projects = [
    { "orgName": "Toshiba Software India pvt ltd", "period": "Jun 2015 - Nov - 2015", "title": "Finance Regimentation", "description": "The project is used to keep track of the (SOW) and to maintain the financial status", "Role": "Java Developer", "orgLogo": `${Toshiba}` },
    { "orgName": "IBM India pvt ltd", "period": "Jan 2017 - Jun - 2017", "title": "Certification As A Service", "description": "IBM product teams that use IBM JDK need to certify their product by running the JCK test suite.", "Role": "Java Developer", "orgLogo": `${IBM}` },
    { "orgName": "Ariveguru technologies", "period": "Jan 2018 - Sep 2019", "title": "Flip2Flex", "description": "Designed new designs for generating the offer list for other teams and their clients", "Role": "UI Developer", "orgLogo": `${AG}` },
    { "orgName": "Ariveguru technologies", "period": "Jul 2018 - Jan 2019", "title": "Sharanasangama App", "description": "PWA application both mobile browser and desktop browser for a community based social media.", "Role": "UI Developer", "orgLogo": `${AG}` },
    { "orgName": "Pathfinder Global", "period": "Oct 2019 - Jul 2020", "title": "Proleaz_Dashboard", "description": "Developed the dashboard to provide the data in chart and table representations.", "Role": "Software Developer", "orgLogo": `${Pathfinder}` },
    { "orgName": "Hubino", "period": "May 2021 - May 2021", "title": "Apple pass", "description": "It is a wallet pass (Equivalent to QR Code) generation service.", "Role": "Software Developer", "orgLogo": `${Hubino}` },
    { "orgName": "Hubino", "period": "May 2021 - Jul 2021", "title": "Experience Builder", "description": "A web application to show the concept skills with hierarchy relationship diagrams using joint technology.", "Role": "Software Developer", "orgLogo": `${Hubino}` },
    { "orgName": "Hubino", "period": "Jul 2020 - Jan 2021", "title": "Rozie Care Agents", "description": " Planned real-time guidance and implemented soft phone features using Angular and AWS.", "Role": "Software Developer", "orgLogo": `${Hubino}` },
    { "orgName": "Hubino", "period": "Feb 2021 - Nov 2021", "title": "Xago", "description": "Built live trading dashboards for XRP and ZAR currencies.", "Role": "Software Developer", "orgLogo": `${Hubino}` },
    { "orgName": "QBurst Technologies", "period": "Jan 2022 - Nov 2022", "title": "Store Portal", "description": "Delivered the drag and drop components with dynamic size of layout changes.", "Role": "Tech Lead", "orgLogo": `${QBurst}` },
    { "orgName": "QBurst Technologies", "period": "Nov 2022 - Apr 2023", "title": "NYU Langone", "description": "Automated student DB updates; developed UI enhancements in React and Node.", "Role": "Full Stack", "orgLogo": `${QBurst}` },
    { "orgName": "QBurst Technologies", "period": "May 2023 - Jan 2025", "title": "MediaOcean", "description": "Designed modular UI components, export features, and cost-type automation.", "Role": "Front End", "orgLogo": `${QBurst}` },
    { "orgName": "QBurst Technologies", "period": "Feb 2025 - Present", "title": "Document Management System", "description": "Built PDF viewer integration with SharePoint and S3 using React and Apryse.", "Role": "Module Lead", "orgLogo": `${QBurst}` },
];

const Projects = () => (
    <section id="projects" className="pb-10 bg-gray-100">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((proj) => (
                    <div key={proj.title} className="bg-white rounded-lg shadow-md p-6 flex flex-col">
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
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Projects;