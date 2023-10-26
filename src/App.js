// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Home from './routes/Home';
// import Project from './routes/Project';
// import Contact from './routes/Contact';
// import About from './routes/About';

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/project" element={<Project />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Project from './routes/Project';
import Contact from './routes/Contact';
import About from './routes/About';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
