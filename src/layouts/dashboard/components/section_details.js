// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import "tailwindcss/tailwind.css";
// import { GlobalContext } from "../../../global/Globalcontext"; // Ensure this is correctly imported based on your project structure

// // Carousel Component
// const CarouselComponent = ({ images }) => {
//   return (
//     <Carousel
//       showThumbs={false}
//       className="rounded-xl overflow-hidden relative"
//       style={{ transform: "translateX(-15%)" }}
//     >
//       {images.map((image, index) => (
//         <div key={index} className="flex justify-center">
//           <img src={image} alt={`Carousel Image ${index}`} className="object-cover" />
//         </div>
//       ))}
//     </Carousel>
//   );
// };

// // ListItem Component
// const ListItem = ({ item }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-4 m-4 max-w-xs relative overflow-visible">
//       <div className="flex justify-center -translate-y-1/4 transform">
//         <CarouselComponent images={item.images} className="w-52 h-40 object-cover rounded-md shadow-lg" />
//       </div>
//       <h2 className="text-xl font-bold mt-8 text-center">{item.title}</h2>
//       <p className="text-center">{item.description}</p>
//       <p className="text-center text-gray-500 text-sm">{item.date}</p>
//       <div className="mt-4 flex justify-center space-x-2">
//         <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">Accept</button>
//         <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600">Deny</button>
//       </div>
//     </div>
//   );
// };

// // Sections Component
// const Sections = ({ selectedSection, setSelectedSection }) => {
//   const sections = [
//     "Service1A", "Service1B", "Service1C", "Service2",
//     "Service3", "Service4ChickenFarm", "Service4Manufacture", "Service4Construction"
//   ];

//   const handleSectionClick = (section) => {
//     setSelectedSection(section);
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
//           } shadow-md hover:shadow-lg transition-shadow`}
//           onClick={() => handleSectionClick(section)}
//         >
//           {section}
//         </button>
//       ))}
//     </div>
//   );
// };

// // Main ListComponent
// const ListComponent = () => {
//   const { selectedSection, setSelectedSection } = useContext(GlobalContext);
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (selectedSection) {
//       fetchData();
//     }
//   }, [selectedSection]);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         // `https://telegram-bot-t2be.onrender.com/admin/posts/category/${selectedSection}`
//            `https://telegram-bot-t2be.onrender.com/admin/posts/category/Manufacture`
//       );
//       const parsedData = response.data.data.map((item) => ({
//         title: item[selectedSection]?.enterprise_name || "No Title",
//         description: item.description,
//         images: item[selectedSection]?.photo_url || [],
//         date: new Date(item.created_at).toLocaleDateString(),
//       }));
//       setData(parsedData.length ? parsedData : []);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setData([]);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <Sections selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
//       {loading ? (
//         <div className="text-center mt-4">Loading...</div>
//       ) : data.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
//           {data.map((item, index) => (
//             <ListItem key={index} item={item} />
//           ))}
//         </div>
//       ) : (
//         <div className="text-center mt-4">No data found</div>
//       )}
//     </div>
//   );
// };

// export default ListComponent;


import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";
import { GlobalContext } from "../../../global/Globalcontext"; // Ensure this is correctly imported based on your project structure
import { Carousel } from "react-responsive-carousel";  // Import Carousel here
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// Carousel Component
const CarouselComponent = ({ images }) => {
  return (
    <Carousel
      showThumbs={false}
      className="rounded-xl overflow-hidden relative"
      style={{ transform: "translateX(-15%)" }}
    >
      {images.map((image, index) => (
        <div key={index} className="flex justify-center">
          <img src={image} alt={`Carousel Image ${index}`} className="object-cover" />
        </div>
      ))}
    </Carousel>
  );
};

// ListItem Component
const ListItem = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-4 max-w-xs relative overflow-visible">
      <div className="flex justify-center -translate-y-1/4 transform">
        <CarouselComponent images={item.images} className="w-52 h-40 object-cover rounded-md shadow-lg" />
      </div>
      <h2 className="text-xl font-bold mt-8 text-center">{item.title}</h2>
      <p className="text-center">{item.description}</p>
      <p className="text-center text-gray-500 text-sm">{item.date}</p>
      <div className="mt-4 flex justify-center space-x-2">
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">Accept</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600">Deny</button>
      </div>
    </div>
  );
};

// Sections Component
const Sections = ({ selectedSection, setSelectedSection }) => {
  const sections = [
    "Service1A", "Service1B", "Service1C", "Service2",
    "Service3", "Service4ChickenFarm", "Service4Manufacture", "Service4Construction"
  ];

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (<>
    <div className="overflow-x-auto flex space-x-4 p-4 bg-gray-100">
      {sections.map((section) => (
        <button
          key={section}
          className={`px-4 py-2 rounded ${
            selectedSection === section
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500"
          } shadow-md hover:shadow-lg transition-shadow`}
          onClick={() => handleSectionClick(section)}
        >
          {section}
        </button>
      ))}
    </div>

    </>
  );
};

// Main ListComponent
const ListComponent = () => {
  const { selectedSection, setSelectedSection } = useContext(GlobalContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedSection) {
      fetchData();
    }
  }, [selectedSection]);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         `https://telegram-bot-t2be.onrender.com/admin/posts/category/${selectedSection}`
//       );
// console.log("reponse");
//       console.log(response);
//       const parsedData = response.data.data
//         .filter((item) => item[selectedSection]) // Only include items that have data in the selected section
//         .map((item) => ({
//           title: item[selectedSection]?.enterprise_name || "No Title",
//           description: item.description,
//           images: item[selectedSection]?.photo_url || [],
//           date: new Date(item.created_at).toLocaleDateString(),
//         }));
//       setData(parsedData.length ? parsedData : []);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setData([]);
//     }
//     setLoading(false);
//   };
// const fetchData = async () => {
//   setLoading(true);
//   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNkMWZiYjlmLTQ2OGUtNDA0Mi1iMzExLTlkYjhjZTE5NjcxYyIsInJvbGUiOiJTVVBFUl9BRE1JTiIsImlhdCI6MTcyMTU3ODMzNCwiZXhwIjoxNzI5MzU0MzM0fQ.MaqnX3M2tojHir9rlEpyJVLtjuMibkHYZXlnEoWe-NQ"; // Replace with the actual token or pass it as a prop/context

//   try {
//     const response = await axios.get(
//       // `https://telegram-bot-t2be.onrender.com/admin/posts/category/${selectedSection}`,
//       `https://telegram-bot-t2be.onrender.com/admin/posts/category/Manufacture`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     console.log("response", response);

//     const parsedData = response.data.data
//       .filter((item) => item["Manufacture"]) 
//       .map((item) => ({
//         title: item["Manufacture"]?.enterprise_name || "No Title",
//         description: item.description,
//         images: item["Manufacture"]?.photo_url || [],
//         date: new Date(item.created_at).toLocaleDateString(),
//       }));
//       console.log("parsedData");
//     console.log(parsedData);
//     setData(parsedData.length ? parsedData : []);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     alert(`Error fetching data: ${error.message}`); 
//     setData([]);
//   }

//   setLoading(false);
// };

const fetchData = async () => {
  setLoading(true);
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNkMWZiYjlmLTQ2OGUtNDA0Mi1iMzExLTlkYjhjZTE5NjcxYyIsInJvbGUiOiJTVVBFUl9BRE1JTiIsImlhdCI6MTcyMTU3ODMzNCwiZXhwIjoxNzI5MzU0MzM0fQ.MaqnX3M2tojHir9rlEpyJVLtjuMibkHYZXlnEoWe-NQ"; // Replace with the actual token or pass it as a prop/context

  try {
    const response = await axios.get(
      `https://telegram-bot-t2be.onrender.com/admin/posts/category/Manufacture`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("response data", response.data.data);

  
    response.data.data.forEach((item, index) => {
      console.log(`Item ${index} keys:`, Object.keys(item));
    });

    const parsedData = response.data.data
      .filter((item) => item["Service4Manufacture"]) 
      .map((item) => ({
        title: item["Service4Manufacture"]?.enterprise_name || "No Title",
        description: item.description,
        images: item["Service4Manufacture"]?.photo_url || [],
        date: new Date(item.created_at).toLocaleDateString(),
      }));

    console.log("parsedData", parsedData);

    setData(parsedData.length ? parsedData : []);
  } catch (error) {
    console.error("Error fetching data:", error);
    alert(`Error fetching data: ${error.message}`); 
    setData([]);
  }

  setLoading(false);
};

  return (
    <div className="container mx-auto p-4">
      <Sections selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
      <div style={{ marginTop: '100px' }}> </div>
      {loading ? (
        <div className="text-center mt-4">Loading...</div>
      ) : data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {data.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-4">No data found</div>
      )}
    </div>
  );
};

export default ListComponent;
