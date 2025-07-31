const About = () => {
    return (
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">About Me</h2>
                <p className="text-lg mb-4">
                    Software Engineer with 8 years of experience (including 1-year internship) in developing full-stack web applications. Proficient in JavaScript, React, Node, MongoDB, AWS and Git. Strong background in leading teams, building scalable front-end/back-end- end systems, and delivering business-critical features.
                </p>
                <h3 className="text-2xl font-semibold mb-4">Skills</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                    <ul className="list-disc list-inside space-y-2">
                        <li>React</li>
                        <li>react js</li>
                        <li>system architecture</li>
                        <li>Node.js</li>
                        <li>JavaScript</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-2">
                        <li>AWS</li>
                        <li>Git</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                        <li>Cypress</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-2">
                        <li>React Testing Library</li>
                        <li>Jest</li>
                        <li>Sonar</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;