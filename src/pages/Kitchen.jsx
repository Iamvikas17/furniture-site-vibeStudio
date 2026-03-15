// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import kitchenImage from "../assets/Kitchen/Kitchen2.jpg";

// const Kitchen = () => {
//   // Coordinates based on the high-angle prompt (Adjust percentages after generating image)
//   const hotspots = [
//     {
//       id: 1,
//       left: "50%",
//       top: "60%",
//       title: "Waterfall Island",
//       price: "$3,200",
//     },
//     { id: 2, left: "48%", top: "52%", title: "Brass Faucet", price: "$450" },
//     {
//       id: 3,
//       left: "35%",
//       top: "75%",
//       title: "Leather Stools",
//       price: "$210/pc",
//     },
//     { id: 4, left: "15%", top: "45%", title: "Smart Fridge", price: "$2,800" },
//     {
//       id: 5,
//       left: "85%",
//       top: "50%",
//       title: "Double Wall Oven",
//       price: "$1,950",
//     },
//     { id: 6, left: "70%", top: "65%", title: "Stand Mixer", price: "$499" },
//     { id: 7, left: "75%", top: "63%", title: "Designer Kettle", price: "$180" },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 1.1 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.95 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="h-screen w-screen overflow-x-auto overflow-y-hidden bg-black hide-scrollbar"
//     >
//       {/* Scrollable Canvas - Using your 100% correct panoramic logic */}
//       <div className="relative h-full min-w-full w-max flex flex-nowrap">
//         <img
//           src={kitchenImage}
//           alt="Modern Kitchen View"
//           className="h-full w-auto max-w-none md:min-w-full md:object-cover block select-none "
//           draggable="false"
//         />

//         {/* --- INTERACTIVE LAYER --- */}
//         <div className="absolute inset-0 z-10 pointer-events-none">
//           {/* Mapping through the 13+ Kitchen Objects */}
//           {hotspots.map((spot) => (
//             <div
//               key={spot.id}
//               className="absolute pointer-events-auto"
//               style={{ left: spot.left, top: spot.top }}
//             >
//               <motion.div
//                 whileHover={{ scale: 1.2 }}
//                 className="relative flex items-center justify-center cursor-pointer group"
//               >
//                 <div className="absolute w-5 h-5 bg-white/20 rounded-full animate-ping" />
//                 <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />

//                 <div className="absolute bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/80 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded text-white text-[9px] font-black uppercase tracking-widest whitespace-nowrap">
//                   {spot.title}{" "}
//                   <span className="ml-2 text-white/50">{spot.price}</span>
//                 </div>
//               </motion.div>
//             </div>
//           ))}

//           {/* BACK TO LIVING ROOM (Spatial Navigation) */}
//           <div className="absolute right-[5%] top-1/2 -translate-y-1/2 pointer-events-auto">
//             <Link to="/inside">
//               <motion.div
//                 whileHover={{
//                   scale: 1.05,
//                   backgroundColor: "white",
//                   color: "black",
//                 }}
//                 className="flex items-center space-x-4 border border-white/50 px-8 py-4 rounded-full backdrop-blur-xl text-white transition-all duration-500 group"
//               >
//                 <span className="font-black text-[10px] tracking-[0.4em] uppercase">
//                   Living Area
//                 </span>
//                 <svg
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2.5"
//                   className="group-hover:translate-x-1 transition-transform"
//                 >
//                   <path d="M5 12h14M12 5l7 7-7 7" />
//                 </svg>
//               </motion.div>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Label indicating current section */}
//       <div className="fixed bottom-10 left-1/2 -translate-x-1/2 text-white/20 text-[10px] font-black tracking-[0.8em] uppercase select-none pointer-events-none">
//         Kitchen & Dining
//       </div>
//     </motion.div>
//   );
// };

// export default Kitchen;
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import kitchenImage from "../assets/Kitchen/Kitchen2.jpg";

// const Kitchen = () => {
//   // Coordinates based on the high-angle prompt
//   const hotspots = [
//     {
//       id: 1,
//       left: "35%",
//       top: "60%",
//       title: "Chopping Board",
//       price: "$1140",
//     },
//     { id: 2, left: "48%", top: "52%", title: "WaterFall Island", price: "$3450" },
//     {
//       id: 3,
//       left: "38%",
//       top: "78%",
//       title: "Leather Stools",
//       price: "$210/pc",
//     },
//     { id: 4, left: "13%", top: "45%", title: "Smart Fridge", price: "$2,800" },
//     {
//       id: 5,
//       left: "55%",
//       top: "25%",
//       title: "Double Wall Oven",
//       price: "$1,950",
//     },
//     { id: 6, left: "79%", top: "27%", title: "Stand Mixer", price: "$499" },
//     { id: 7, left: "95%", top: "61%", title: "Designer Kettle", price: "$180" },
//     { id: 8, left: "86%", top: "47%", title: "Designer Kettle", price: "$2380" },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 1.1 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.95 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="h-screen w-screen overflow-x-auto overflow-y-hidden bg-black hide-scrollbar"
//     >
//       {/* Scrollable Canvas */}
//       <div className="relative h-full min-w-full w-max flex flex-nowrap">
//         <img
//           src={kitchenImage}
//           alt="Modern Kitchen View"
//           className="h-full w-auto max-w-none md:min-w-full md:object-cover block select-none opacity-85"
//           draggable="false"
//         />

//         {/* --- TOP DARK GRADIENT OVERLAY (The Fix) --- */}
//         {/* This div sits on top of the image but behind the hotspots.
//             h-[40%]: It only covers the top 40% of the screen.
//             from-black/80: Starts very dark at the top.
//             to-transparent: Fades to nothing.
//         */}
//         <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-black/80 to-transparent pointer-events-none"></div>

//         {/* --- INTERACTIVE LAYER --- */}
//         <div className="absolute inset-0 z-10 pointer-events-none">
//           {/* Hotspots */}
//           {hotspots.map((spot) => (
//             <div
//               key={spot.id}
//               className="absolute pointer-events-auto"
//               style={{ left: spot.left, top: spot.top }}
//             >
//               <motion.div
//                 whileHover={{ scale: 1.2 }}
//                 className="relative flex items-center justify-center cursor-pointer group"
//               >
//                 <div className="absolute w-5 h-5 bg-white/20 rounded-full animate-ping" />
//                 <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />

//                 <div className="absolute bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/80 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded text-white text-[9px] font-black uppercase tracking-widest whitespace-nowrap">
//                   {spot.title}{" "}
//                   <span className="ml-2 text-white/50">{spot.price}</span>
//                 </div>
//               </motion.div>
//             </div>
//           ))}

//           {/* BACK TO LIVING ROOM */}
//           <div className="absolute right-[17%] top-[40rem] top-1/2 -translate-y-1/2 pointer-events-auto">
//             <Link to="/inside">
//               <motion.div
//                 whileHover={{
//                   scale: 1.05,
//                   backgroundColor: "white",
//                   color: "black",
//                 }}
//                 className="flex items-center space-x-4 border border-white/50 px-8 py-4 rounded-full backdrop-blur-xl text-white transition-all duration-500 group"
//               >
//                 <span className="font-black text-[10px] tracking-[0.4em] uppercase">
//                   Living Area
//                 </span>
//                 <svg
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2.5"
//                   className="group-hover:translate-x-1 transition-transform"
//                 >
//                   <path d="M5 12h14M12 5l7 7-7 7" />
//                 </svg>
//               </motion.div>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Label */}
//       <div className="fixed bottom-10 left-1/2 -translate-x-1/2 text-white/20 text-[10px] font-black tracking-[0.8em] uppercase select-none pointer-events-none">
//         Kitchen & Dining
//       </div>
//     </motion.div>
//   );
// };

// export default Kitchen;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import roomImage from "../assets/Kitchen/Kitchen2.jpg";

const Kitchen = () => {
  const hotspots = [
    {
      id: 1,
      left: "35%",
      top: "60%",
      title: "Chopping Board",
      price: "$1140",
    },
    {
      id: 2,
      left: "48%",
      top: "52%",
      title: "WaterFall Island",
      price: "$3450",
    },
    {
      id: 3,
      left: "38%",
      top: "78%",
      title: "Leather Stools",
      price: "$210/pc",
    },
    { id: 4, left: "13%", top: "45%", title: "Smart Fridge", price: "$2,800" },
    {
      id: 5,
      left: "55%",
      top: "25%",
      title: "Double Wall Oven",
      price: "$1,950",
    },
    { id: 6, left: "79%", top: "27%", title: "Stand Mixer", price: "$499" },
    { id: 7, left: "95%", top: "61%", title: "Designer Kettle", price: "$180" },
    {
      id: 8,
      left: "86%",
      top: "47%",
      title: "Designer Kettle",
      price: "$2380",
    },
  ];
  return (
    /* Kitchen ki tarah identical transitions add kiye hain */
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }} 
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-screen w-screen overflow-x-auto overflow-y-hidden bg-black hide-scrollbar"
    >
      {/* Scrollable Canvas - Keeping your correct CSS */}
      <div className="relative h-full min-w-full w-max flex flex-nowrap">
        <img
          src={roomImage}
          alt="Living Room View"
          className="h-full w-auto max-w-none md:min-w-full md:object-cover block select-none"
          draggable="false"
        />
        <div className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-black/80 to-transparent pointer-events-none"></div>
        {/* --- INTERACTIVE LAYER --- */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* 1. FURNITURE PINS (Hotspots) */}
          {hotspots.map((spot) => (
            <div
              key={spot.id}
              className="absolute pointer-events-auto"
              style={{ left: spot.left, top: spot.top }}
            >
              <motion.div
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

          {/* 2. WAY BACK TO GARDEN (Right Side Door) */}
          <div className="absolute right-[5%] top-[36rem] -translate-y-1/2 pointer-events-auto">
            <Link to="/inside">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "white",
                  color: "black",
                }}
                className="flex items-center space-x-4 border border-white/50 px-8 py-4 rounded-full backdrop-blur-xl text-white transition-all duration-500 group"
              >
                <span className="font-black text-[10px] tracking-[0.4em] uppercase">
                  way to Living Room
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.div>
            </Link>
          </div>

          {/* 4. WAY TO BEDROOM (Center/Up Direction) */}
        </div>
      </div>

      {/* Bottom Label indicating current room */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 text-white/20 text-[10px] font-black tracking-[0.8em] uppercase select-none pointer-events-none">
        Kitchen Interior
      </div>
    </motion.div>
  );
};

export default Kitchen;
