import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="py-8">
        <main className="flex-grow">
          <About />
          <Projects />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;