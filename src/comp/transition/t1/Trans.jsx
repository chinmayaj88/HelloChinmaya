// import React, { useEffect, useState } from "react";
// import "./trans.css";

// function Trans({ content }) {
//   const bars = Array.from({ length: 10 }, (_, index) => index + 1);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <div className="trans-cont">
//       <div className={`trans-overlay ${mounted ? "show" : ""}`}>
//         {bars.map((bar) => (
//           <div
//             key={bar}
//             className={`bar ba ba${bar}`}
//             style={{ left: `${(bar - 1) * 10}vw` }}
//           ></div>
//         ))}
//       </div>

//       <div className="content">{content}</div>
//     </div>
//   );
// }

// export default Trans;
