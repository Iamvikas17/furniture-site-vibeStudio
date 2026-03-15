// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import Hotspot from "../components/Hotspot";
// import gardenImage from "../assets/Garden/RGardenLight.jpg";
// // import gardenImage from "../assets/Garden/RNightGarden.jpg";
// const Garden = () => {
//   return (
//     <div className="h-screen w-screen overflow-x-auto overflow-y-hidden bg-black hide-scrollbar">
//       {/* Container hamesha kam se kam screen jitna bada hoga */}
//       <div className="relative h-full min-w-full w-max flex flex-nowrap">
//         <img
//           src={gardenImage}
//           alt="Garden View"
//           className="h-full w-auto max-w-none md:min-w-full md:object-cover block select-none opacity-100"
//           draggable="false"
//         />

//         {/* --- HOTSPOTS LAYER --- */}
//         <div className="absolute inset-0 z-10 pointer-events-none">
//           {/* Coordinates check karein (Adjusted for wide view) */}
//           <div className="absolute left-[15%] top-[70%] pointer-events-auto">
//             <Hotspot
//               title="Signature Chair"
//               price="$1,200"
//               description="Handcrafted Leather"
//             />
//           </div>

//           <div className="absolute left-[45%] top-[45%] pointer-events-auto">
//             <Hotspot
//               title="Architectural Mirror"
//               price="$800"
//               description="Crystal Clear Finish"
//             />
//           </div>
//           <div className="absolute right-[65%]  mt-[9.5rem] md:right-[65%] top-1/2 -translate-y-1/2 pointer-events-auto">
//             <Link to="/inside">
//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 className="w-10 h-10 md:w-20 md:h-20 rounded-full border border-white flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-md"
//               >
//                 <span className="font-black text-[10px] md:text-xs tracking-[0.4em]">
//                   ENTER
//                 </span>
//               </motion.div>
//             </Link>
//           </div>
//           {/* ENTER GATEWAY - Position it relative to your door */}
//           <div className="absolute right-[47%]  md:right-[47%] top-[10rem] top-1/2 -translate-y-1/2 pointer-events-auto">
//             <Link to="/inside">
//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 className="w-20 h-20 md:w-20 md:h-20 rounded-full border border-white flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-md"
//               >
//                 <span className="font-black text-[10px] md:text-xs tracking-[0.4em]">
//                   ENTER
//                 </span>
//               </motion.div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Garden;

// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import gardenLight from "../assets/Garden/RGardenLight.jpg";
// import gardenNight from "../assets/Garden/RNightGarden.jpg";

// const Garden = () => {
//   const [isNight, setIsNight] = useState(false);

//   return (
//     <div className="h-screen w-screen overflow-x-auto overflow-y-hidden bg-black hide-scrollbar">
//       {/* Container - NO CHANGES to your CSS logic */}
//       <div className="relative h-full min-w-full w-max flex flex-nowrap">
//         {/* Day Image Layer */}
//         <motion.img
//           animate={{ opacity: isNight ? 0 : 1 }}
//           transition={{ duration: 0.8 }}
//           src={gardenLight}
//           alt="Garden View"
//           className="h-full w-auto max-w-none md:min-w-full md:object-cover block select-none"
//           draggable="false"
//         />

//         {/* Night Image Layer - Placed absolutely over Day image */}
//         <motion.img
//           initial={{ opacity: 0 }}
//           animate={{ opacity: isNight ? 1 : 0 }}
//           transition={{ duration: 0.8 }}
//           src={gardenNight}
//           alt="Garden Night View"
//           className="absolute inset-0 h-full w-auto max-w-none md:min-w-full md:object-cover block select-none"
//           draggable="false"
//         />

//         {/* --- INTERACTIVE LAYER --- */}
//         <div className="absolute inset-0 z-10 pointer-events-none">
//           {/* 1. SOFA PIN (Using your div logic to fix coordinates) */}
//           <div className="absolute left-[30.5%] top-[66%] pointer-events-auto">
//             <motion.div
//               whileHover={{ scale: 1.2 }}
//               className="w-4 h-4 md:w-6 md:h-6 rounded-full border-2 border-white bg-black/20 backdrop-blur-md flex items-center justify-center cursor-pointer group"
//             >
//               <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:scale-150 transition-transform" />
//               {/* Product Label on Hover */}
//               <div className="absolute bottom-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white text-[8px] tracking-widest p-2 uppercase whitespace-nowrap">
//                 Velvet Sofa Set <br /> <span className="font-bold">$2,200</span>
//               </div>
//             </motion.div>
//           </div>

//           {/* 2. CENTER TABLE PIN */}
//           <div className="absolute left-[44%] top-[58%] pointer-events-auto">
//             <motion.div
//               whileHover={{ scale: 1.2 }}
//               className="w-4 h-4 md:w-6 md:h-6 rounded-full border-2 border-white bg-black/20 backdrop-blur-md flex items-center justify-center cursor-pointer group"
//             >
//               <div className="w-1.5 h-1.5 bg-white rounded-full" />
//               <div className="absolute bottom-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white text-[8px] tracking-widest p-2 uppercase whitespace-nowrap">
//                 Oak Coffee Table <br /> <span className="font-bold">$850</span>
//               </div>
//             </motion.div>
//           </div>

//           {/* YOUR ORIGINAL ENTER BUTTON 1 (Stayed on Door)
//           <div className="absolute right-[65%] mt-[9.5rem] md:right-[65%] top-1/2 -translate-y-1/2 pointer-events-auto">
//             <Link to="/inside">
//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 className="w-10 h-10 md:w-20 md:h-20 rounded-full border border-white flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-md"
//               >
//                 <span className="font-black text-[10px] md:text-xs tracking-[0.4em]">
//                   ENTER tt
//                 </span>
//               </motion.div>
//             </Link>
//           </div> */}

//           {/* YOUR ORIGINAL ENTER BUTTON 2 */}
//           <div className="absolute right-[47%] md:right-[47%] top-[10rem] top-1/2 -translate-y-1/2 pointer-events-auto">
//             <Link to="/inside">
//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 className="w-20 h-20 md:w-20 md:h-20 rounded-full border border-white flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-md"
//               >
//                 <span className="font-black text-[10px] md:text-xs tracking-[0.4em]">
//                   ENTER
//                 </span>
//               </motion.div>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* LIGHT TOGGLE SWITCH - Locked to UI, not image */}
//       <div className="fixed bottom-10 left-10 z-50">
//         <button
//           onClick={() => setIsNight(!isNight)}
//           className="px-6 py-2 border border-white/30 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-white hover:text-black transition-all backdrop-blur-lg"
//         >
//           {isNight ? "Day Mode" : "Night Mode"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Garden;
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import gardenLight from "../assets/Garden/RGardenLight.jpg";
// import gardenNight from "../assets/Garden/RNightGarden.jpg";

// const Garden = () => {
//   const [isNight, setIsNight] = useState(false);

//   return (
//     <div className="h-screen w-screen overflow-x-auto overflow-y-hidden bg-black hide-scrollbar">
//       {/* YOUR ORIGINAL CSS LOGIC - NO CHANGES */}
//       <div className="relative h-full min-w-full w-max flex flex-nowrap">
//         {/* Day Image Layer */}
//         <motion.img
//           animate={{ opacity: isNight ? 0 : 1 }}
//           transition={{ duration: 0.8 }}
//           src={gardenLight}
//           alt="Garden View"
//           className="h-full w-auto max-w-none md:min-w-full md:object-cover block select-none"
//           draggable="false"
//         />

//         {/* Night Image Layer */}
//         <motion.img
//           initial={{ opacity: 0 }}
//           animate={{ opacity: isNight ? 1 : 0 }}
//           transition={{ duration: 0.8 }}
//           src={gardenNight}
//           alt="Garden Night View"
//           className="absolute inset-0 h-full w-auto max-w-none md:min-w-full md:object-cover block select-none"
//           draggable="false"
//         />

//         {/* --- UPDATED HOTSPOT STYLING ONLY --- */}
//         <div className="absolute inset-0 z-10 pointer-events-none">
//           {/* 1. SOFA PIN - Drake Style Minimal Point */}
//           <div className="absolute left-[30.5%] top-[66%] pointer-events-auto">
//             <motion.div
//               whileHover={{ scale: 1.2 }}
//               className="relative flex items-center justify-center cursor-pointer group"
//             >
//               {/* Visual Pulse effect */}
//               <div className="absolute w-6 h-6 bg-white/20 rounded-full animate-ping" />
//               <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />

//               {/* Minimalist Tooltip */}
//               <div className="absolute bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/80 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded text-white text-[9px] font-black uppercase tracking-widest whitespace-nowrap">
//                 Velvet Sofa <span className="ml-2 text-white/50">$2,200</span>
//               </div>
//             </motion.div>
//           </div>

//           {/* 2. CENTER TABLE PIN */}
//           <div className="absolute left-[44%] top-[58%] pointer-events-auto">
//             <motion.div
//               whileHover={{ scale: 1.2 }}
//               className="relative flex items-center justify-center cursor-pointer group"
//             >
//               <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />

//               <div className="absolute bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/80 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded text-white text-[9px] font-black uppercase tracking-widest whitespace-nowrap">
//                 Oak Coffee Table{" "}
//                 <span className="ml-2 text-white/50">$850</span>
//               </div>
//             </motion.div>
//           </div>

//           {/* ENTER BUTTONS - Staying exactly where they were in your code */}
//           <div className="absolute right-[34%] md:right-[37%] top-[10rem] top-1/2 -translate-y-1/2 pointer-events-auto">
//             <Link to="/inside">
//               <motion.div
//                 initial={{ opacity: 0.8 }}
//                 whileHover={{
//                   scale: 1.05,
//                   opacity: 1,
//                   backgroundColor: "rgba(255,255,255,1)",
//                   color: "#000",
//                 }}
//                 className="flex items-center space-x-4 border border-white/50 px-8 py-4 rounded-full backdrop-blur-xl text-white transition-all duration-500 group"
//               >
//                 <svg
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2.5"
//                   className="group-hover:-translate-x-1 transition-transform"
//                 >
//                   <path d="M19 12H5M12 19l-7-7 7-7" />
//                 </svg>
//                 <span className="font-black text-[10px] tracking-[0.5em] uppercase">
//                   Get Inside
//                 </span>
//               </motion.div>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* LIGHT TOGGLE SWITCH */}
//       <div className="fixed bottom-10 left-10 z-50">
//         <button
//           onClick={() => setIsNight(!isNight)}
//           className="px-6 py-2 border border-white/30 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-white hover:text-black transition-all backdrop-blur-lg"
//         >
//           {isNight ? "Day Mode" : "Night Mode"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Garden;
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import gardenLight from "../assets/Garden/RGardenLight.jpg";
import gardenNight from "../assets/Garden/RNightGarden.jpg";

const Garden = () => {
  const [isNight, setIsNight] = useState(false);

  // 1. Define unique coordinates for Day Mode
  const dayHotspots = [
    { id: 1, left: "34.5%", top: "66%", title: "Velvet Sofa", price: "$2,200" },
    {
      id: 2,
      left: "34%",
      top: "30%",
      title: "Oak Coffee Table",
      price: "$850",
    },
    {
      id: 3,
      left: "58%",
      top: "52%",
      title: "Oak ",
      price: "$850",
    },
    {
      id: 4,
      left: "80%",
      top: "52%",
      title: "Oak ",
      price: "$850",
    },
    {
      id: 5,
      left: "68%",
      top: "52%",
      title: "Oak ",
      price: "$850",
    },
  ];

  // 2. Define unique coordinates for Night Mode (adjust these percentages to fit your night objects)
  const nightHotspots = [
    { id: 1, left: "25%", top: "60%", title: "Night Lounger", price: "$1,80" },
    { id: 2, left: "60%", top: "40%", title: "Outdoor Firepit", price: "$950" },
    {
      id: 3,
      left: "42%",
      top: "24%",
      title: "Oak ",
      price: "$850",
    },
    { id: 4, left: "33%", top: "46%", title: "chair Lounger", price: "$1,800" },
    { id: 5, left: "35%", top: "56.5%", title: "Table", price: "$1,800" },
  ];

  // Select the current set based on state
  const currentHotspots = isNight ? nightHotspots : dayHotspots;

  return (
    <div className="h-screen w-screen overflow-x-auto overflow-y-hidden bg-black hide-scrollbar">
      <div className="relative h-full min-w-full w-max flex flex-nowrap">
        {/* Day Image Layer */}
        <motion.img
          animate={{ opacity: isNight ? 0 : 1 }}
          transition={{ duration: 0.8 }}
          src={gardenLight}
          alt="Garden View"
          className="h-full w-auto max-w-none md:min-w-full md:object-cover block select-none"
          draggable="false"
        />

        {/* Night Image Layer */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: isNight ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          src={gardenNight}
          alt="Garden Night View"
          className="absolute inset-0 h-full w-auto max-w-none md:min-w-full md:object-cover block select-none"
          draggable="false"
        />

        {/* --- DYNAMIC HOTSPOT LAYER --- */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Map through the active hotspots based on Day/Night state */}
          {currentHotspots.map((spot) => (
            <div
              key={spot.id}
              className="absolute pointer-events-auto"
              style={{ left: spot.left, top: spot.top }}
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.2 }}
                className="relative flex items-center justify-center cursor-pointer group"
              >
                <div className="absolute w-6 h-6 bg-white/20 rounded-full animate-ping" />
                <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />

                <div className="absolute bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/80 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded text-white text-[9px] font-black uppercase tracking-widest whitespace-nowrap">
                  {spot.title}{" "}
                  <span className="ml-2 text-white/50">{spot.price}</span>
                </div>
              </motion.div>
            </div>
          ))}

          {/* SHARED ENTER BUTTON - Staying fixed regardless of Day/Night */}
          <div className="absolute right-[34%] md:right-[37%] top-[10rem] top-1/2 -translate-y-1/2 pointer-events-auto">
            <Link to="/inside">
              <motion.div
                initial={{ opacity: 0.8 }}
                whileHover={{
                  scale: 1.05,
                  opacity: 1,
                  backgroundColor: "rgba(255,255,255,1)",
                  color: "#000",
                }}
                className="flex items-center space-x-4 border border-white/50 px-8 py-4 rounded-full backdrop-blur-xl text-white transition-all duration-500 group"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="group-hover:-translate-x-1 transition-transform"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                <span className="font-black text-[10px] tracking-[0.5em] uppercase">
                  Get Inside
                </span>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>

      {/* LIGHT TOGGLE SWITCH */}
      <div className="fixed bottom-10 left-10 z-50">
        <button
          onClick={() => setIsNight(!isNight)}
          className="px-6 py-2 border border-white/30 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-white hover:text-black transition-all backdrop-blur-lg"
        >
          {isNight ? "Day Mode" : "Night Mode"}
        </button>
      </div>
    </div>
  );
};

export default Garden;
