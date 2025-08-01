const About = () => {
    return (
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">About Me</h2>
                <p className="text-lg mb-4">
                    Software Engineer with 8 years of experience (including 1-year internship) in developing full-stack web applications. Proficient in JavaScript, React, Node, MongoDB, AWS and Git. Strong background in leading teams, building scalable front-end/back-end systems, and delivering business-critical features.
                </p>
                <h3 className="text-2xl font-semibold mb-4">Skills</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div>
                        <h4 className="text-lg font-semibold mb-2">Frontend</h4>
                        <ul className="list-disc list-inside space-y-2">
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>React Testing Library</li>
                            <li>Cypress</li>
                            <li>Jest</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-2">Backend</h4>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Node.js</li>
                            <li>Express.js</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-2">Database</h4>
                        <ul className="list-disc list-inside space-y-2">
                            <li>MongoDB</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-2">Cloud & DevOps</h4>
                        <ul className="list-disc list-inside space-y-2">
                            <li>AWS</li>
                            <li>Git</li>
                            <li>Docker</li>
                            <li>Sonar</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
