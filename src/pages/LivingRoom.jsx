// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { ArrowLeft, ArrowRight, Utensils, BedDouble } from "lucide-react";
// import Hotspot from "../components/Hotspot";

// const LivingRoom = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 100 }} // Slide in effect
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: -100 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="relative h-screen w-screen overflow-hidden"
//     >
//       {/* Background Image - Use a high-quality living room photo */}
//       <img
//         src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop"
//         alt="Living Room"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Overlay for premium look */}
//       <div className="absolute inset-0 bg-black/10 backdrop-contrast-125" />

//       {/* --- Hotspots for Furniture --- */}
//       <Hotspot
//         x={45}
//         y={65}
//         title="Nordic Sofa"
//         price="$2,400"
//         description="Premium Grey Fabric"

//       />
//       <Hotspot
//         x={25}
//         y={40}
//         title="Arched Lamp"
//         price="$850"
//         description="Matte Black Finish"
//       />
//       <Hotspot
//         x={70}
//         y={55}
//         title="Oak Sideboard"
//         price="$1,100"
//         description="Handcrafted Solid Wood"
//       />

//       {/* --- Navigation Controls --- */}

//       {/* Go Back to Garden */}
//       <Link
//         to="/"
//         className="absolute top-10 left-10 z-50 group flex items-center space-x-3 text-white bg-black/20 p-3 rounded-full backdrop-blur-md hover:bg-white hover:text-black transition-all"
//       >
//         <ArrowLeft size={20} />
//         <span className="text-xs font-bold uppercase tracking-widest hidden group-hover:block pr-2">
//           Go Outside
//         </span>
//       </Link>

//       {/* Room Selection Menu (Bottom Center) */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex space-x-6">
//         <Link to="/inside/kitchen">
//           <motion.div
//             whileHover={{ y: -5 }}
//             className="flex flex-col items-center bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-3xl text-white hover:bg-white hover:text-black transition-all w-32"
//           >
//             <Utensils size={24} className="mb-2" />
//             <span className="text-[10px] font-black uppercase tracking-tighter">
//               To Kitchen
//             </span>
//           </motion.div>
//         </Link>

//         <div className="flex flex-col items-center bg-white border border-white p-5 rounded-3xl text-black w-32">
//           <span className="text-[10px] font-black uppercase tracking-tighter opacity-40">
//             Currently in
//           </span>
//           <span className="text-xs font-black uppercase">Living Room</span>
//         </div>

//         {/* You can add Bedroom route later */}
//         <Link to="/inside/bedroom">
//           <motion.div
//             whileHover={{ y: -5 }}
//             className="flex flex-col items-center bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-3xl text-white hover:text-black hover:bg-white transition-all w-32"
//           >
//             <BedDouble size={24} className="mb-2" />
//             <span className="text-[10px] font-black uppercase tracking-tighter">
//               Bedroom (Locked)
//             </span>
//           </motion.div>
//         </Link>
//       </div>

//       {/* Side Label */}
//       <div className="absolute right-10 top-1/2 -rotate-90 origin-right">
//         <h2 className="text-white/30 text-8xl font-black uppercase tracking-tighter select-none">
//           INTERIOR
//         </h2>
//       </div>
//     </motion.div>
//   );
// };

// export default LivingRoom;
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import roomImage from "../assets/LivingRoom/LivingRoom2.jpg";

// const LivingRoom = () => {
//   // Static Hotspots for Living Room
//   const hotspots = [
//     {
//       id: 1,
//       left: "15%",
//       top: "70%",
//       title: "Signature Sofa",
//       price: "$2,200",
//     },
//     {
//       id: 2,
//       left: "45%",
//       top: "55%",
//       title: "Marble Coffee Table",
//       price: "$850",
//     },
//     { id: 3, left: "70%", top: "35%", title: "Designer Lamp", price: "$400" },
//   ];

//   return (
//     <div className="h-screen w-screen overflow-x-auto overflow-y-hidden bg-black hide-scrollbar">
//       {/* Keeping your 100% correct CSS logic for horizontal scroll */}
//       <div className="relative h-full min-w-full w-max flex flex-nowrap">
//         <img
//           src={roomImage}
//           alt="Living Room View"
//           className="h-full w-auto max-w-none md:min-w-full md:object-cover block select-none"
//           draggable="false"
//         />

//         {/* --- INTERACTIVE LAYER --- */}
//         <div className="absolute inset-0 z-10 pointer-events-none">
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
//                 {/* Visual Pulse effect */}
//                 <div className="absolute w-6 h-6 bg-white/20 rounded-full animate-ping" />
//                 <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />

//                 {/* Minimalist Tooltip */}
//                 <div className="absolute bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/80 backdrop-blur-md px-3 py-1.5 border border-white/10 rounded text-white text-[9px] font-black uppercase tracking-widest whitespace-nowrap">
//                   {spot.title}{" "}
//                   <span className="ml-2 text-white/50">{spot.price}</span>
//                 </div>
//               </motion.div>
//             </div>
//           ))}

//           {/* BACK TO GARDEN BUTTON */}
//           <div className="absolute left-[34%] md:left-[37%] top-1/2 -translate-y-1/2 pointer-events-auto">
//             <Link to="/">
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
//                   Back to Garden
//                 </span>
//               </motion.div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LivingRoom;
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import roomImage from "../assets/LivingRoom/LivingRoom.jpg";

const LivingRoom = () => {
  // Static Hotspots for Living Room Furniture
  const hotspots = [
    { id: 1, left: "25%", top: "70%", title: "Nordic Sofa", price: "$2,400" },
    {
      id: 2,
      left: "45%",
      top: "65%",
      title: "Oak Coffee Table",
      price: "$920",
    },
    { id: 3, left: "60%", top: "35%", title: "Arched Lamp", price: "$850" },
  ];

  return (
    /* Kitchen ki tarah identical transitions add kiye hain */
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }} // Kitchen ki tarah Zoom-in effect
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
          <div className="absolute right-[5%] top-1/2 -translate-y-1/2 pointer-events-auto">
            <Link to="/">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "white",
                  color: "black",
                }}
                className="flex items-center space-x-4 border border-white/50 px-8 py-4 rounded-full backdrop-blur-xl text-white transition-all duration-500 group"
              >
                <span className="font-black text-[10px] tracking-[0.4em] uppercase">
                  Go Outside
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

          {/* 3. WAY TO KITCHEN (Left Side Door) */}
          <div className="absolute left-[5%] top-1/2 -translate-y-1/2 pointer-events-auto">
            <Link to="/inside/kitchen">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "white",
                  color: "black",
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
                <span className="font-black text-[10px] tracking-[0.4em] uppercase">
                  Kitchen
                </span>
              </motion.div>
            </Link>
          </div>

          {/* 4. WAY TO BEDROOM (Center/Up Direction) */}
          <div className="absolute left-[40%] top-[40%] -translate-x-1/2 pointer-events-auto">
            <Link to="/inside/bedroom">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="mb-2 text-white flex flex-col items-center"
                >
                  <span className="text-[10px] font-black tracking-[0.3em] uppercase mb-1">
                    Enter Bedroom
                  </span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="M18 15l-6-6-6 6" />
                  </svg>
                </motion.div>
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Label indicating current room */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 text-white/20 text-[10px] font-black tracking-[0.8em] uppercase select-none pointer-events-none">
        Living Interior
      </div>
    </motion.div>
  );
};

export default LivingRoom;
