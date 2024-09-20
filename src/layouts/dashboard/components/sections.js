// import React, { useState, useContext } from "react";
// import "tailwindcss/tailwind.css";
// import { GlobalContext } from "../../../global/Globalcontext";

// const Sections = () => {
//   const [selectedSection, setSelectedSection] = useState("Section1");
//   const { globalVariable, setGlobalVariable } = useContext(GlobalContext);

//   // Updated section names based on your previous requests
//   const sections = [
//     "Service1A", "Service1B", "Service1C", "Service2",
//     "Service3", "Service4ChickenFarm", "Service4Manufacture", "Service4Construction"
//   ];

//   const handleSectionClick = (section) => {
//     setSelectedSection(section);
//     setGlobalVariable(section); // Update the global variable with the selected section
//   };

//   return (
//     <div className="overflow-x-auto flex space-x-4 p-4 bg-gray-100">
//       {sections.map((section) => (
//         <button
//           key={section}
//           className={`px-4 py-2 rounded ${
//             selectedSection === section
//               ? "bg-blue-500 text-white"
//               : "bg-white text-blue-500"
//           }`}
//           onClick={() => handleSectionClick(section)}
//         >
//           {section}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Sections;


import React from "react";
import "tailwindcss/tailwind.css";

const Sections = ({ selectedSection, setSelectedSection }) => {
  const sections = [
    "Service1A", "Service1B", "Service1C", "Service2",
    "Service3", "Service4ChickenFarm", "Service4Manufacture", "Service4Construction"
  ];

  const handleSectionClick = (section) => {
    setSelectedSection(section); 
  };

  return (
    <div className="overflow-x-auto flex space-x-4 p-4 bg-gray-100">
      {sections.map((section) => (
        <button
          key={section}
          className={`px-4 py-2 rounded ${
            selectedSection === section
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500"
          }`}
          onClick={() => handleSectionClick(section)}
        >
          {section}
        </button>
      ))}
    </div>
  );
};

export default Sections;
