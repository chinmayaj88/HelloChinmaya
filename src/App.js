import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./comp/nav/Nav";
import Main from "./pages/Main/Main";
import Footer from "./comp/footer/Footer";
import Work from "./pages/work/Work";
import Contact from "./pages/contact/Contact";
import Capable from "./pages/capabilities/Capable";
import Company from "./pages/company/Companypg";
import Transition3 from "./comp/transition/t3/Transition3";

function App() {
  const [isDesktop, setIsDesktop] = useState(true);
  const [showTransition, setShowTransition] = useState(true);
  const [isTransitionComplete, setTransitionComplete] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1024) {
        setIsDesktop(false);
      } else {
        setIsDesktop(true);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Delay hiding transition to allow it to be visible on initial load
    if (showTransition) {
      setTimeout(() => {
        setShowTransition(false);
      }, 3000); // Adjust the delay time as per your requirement
    } else {
      // Show the footer and nav after transition
      setTransitionComplete(true);
    }
  }, [showTransition]);

  return (
    <>
      {isDesktop ? (
        <BrowserRouter>
          {isTransitionComplete && <Nav />}
          <Routes>
            <Route
              path="/"
              element={showTransition ? <Transition3 /> : <Main />}
            />
            <Route path="/work" element={<Work />} />
            <Route path="/company" element={<Company />} />
            <Route path="/capabilities" element={<Capable />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {isTransitionComplete && <Footer />}
        </BrowserRouter>
      ) : (
        <h1>Please access this website from a desktop or larger screen</h1>
      )}
    </>
  );
}

export default App;
// ###########################################################################################//
// ###########################################################################################//
// ###########################################################################################//
// import "./App.css";
// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Nav from "./comp/nav/Nav";
// import Main from "./pages/Main/Main";
// import Footer from "./comp/footer/Footer";
// import Work from "./pages/work/Work";
// import Contact from "./pages/contact/Contact";
// import Capable from "./pages/capabilities/Capable";
// import Company from "./pages/company/Companypg";
// import Transition3 from "./comp/transition/t3/Transition3";

// function App() {
//   const [isDesktop, setIsDesktop] = useState(true);
//   const [showTransition, setShowTransition] = useState(true);
//   useEffect(() => {
//     function handleResize() {
//       if (window.innerWidth < 1024) {
//         setIsDesktop(false);
//       } else {
//         setIsDesktop(true);
//       }
//     }
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     // Disable transition after initial load
//     if (showTransition) {
//       setShowTransition(false);
//     }
//   }, [showTransition]);

//   return (
//     <>
//       {isDesktop ? (
//         <BrowserRouter>
//           <Nav />
//           <Routes>
//             <Route path="/" element={<Main />} />
//             <Route path="/work" element={<Work />} />
//             <Route path="/company" element={<Company />} />
//             <Route path="/capabilities" element={<Capable />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/gg" element={<Transition3 />} />
//           </Routes>
//           <Footer />
//         </BrowserRouter>
//       ) : (
//         <h1>Please access this website from a desktop or larger screen</h1>
//       )}
//     </>
//   );
// }

// export default App;
