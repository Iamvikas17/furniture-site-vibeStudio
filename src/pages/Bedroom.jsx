import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bedroomImage from "../assets/Bedroom/Bedroom2.png";

const Bedroom = () => {
  // Coordinates for the stylized 3D bedroom items
  const hotspots = [
    { id: 1, left: "42%", top: "70%", title: "Cloud Bed", price: "$3,400" },
    { id: 2, left: "50%", top: "60%", title: "Moon Lamp", price: "$150" },
    { id: 3, left: "10%", top: "75%", title: "Soft Wardrobe", price: "$2,100" },
    { id: 4, left: "75%", top: "70%", title: "Velvet Lounge", price: "$850" },
    { id: 5, left: "60%", top: "85%", title: "Shaggy Rug", price: "$300" },
    { id: 6, left: "30%", top: "35%", title: "decto", price: "$300" },
    { id: 7, left: "92%", top: "80%", title: "Table lunge", price: "$850" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-screen w-screen overflow-x-auto overflow-y-hidden bg-black hide-scrollbar"
    >
      <div className="relative h-full min-w-full w-max flex flex-nowrap">
        <img
          src={bedroomImage}
          alt="Stylized Bedroom"
          className="h-full w-auto max-w-none md:min-w-full md:object-cover block select-none"
          draggable="false"
        />

        {/* --- TOP DARK GRADIENT OVERLAY (For Navbar Visibility) --- */}
        <div className="absolute top-0 left-0 w-full h-[35%] bg-gradient-to-b from-black/70 to-transparent pointer-events-none z-20"></div>

        {/* --- INTERACTIVE LAYER --- */}
        <div className="absolute inset-0 z-30 pointer-events-none">
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
                {/* Stylized pulse for the 'cartoon' feel */}
                <div className="absolute w-6 h-6 bg-white/30 rounded-full animate-ping" />
                <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,1)]" />

                <div className="absolute bottom-10 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/80 backdrop-blur-xl px-4 py-2 border border-white/20 rounded-full text-white text-[10px] font-black uppercase tracking-widest whitespace-nowrap shadow-2xl">
                  {spot.title}{" "}
                  <span className="ml-2 text-white/40">{spot.price}</span>
                </div>
              </motion.div>
            </div>
          ))}

          {/* SPATIAL NAVIGATION: BACK TO LIVING ROOM (Left Side) */}
          <div className="absolute left-[78%] top-1/2 -translate-y-1/2 pointer-events-auto">
            <Link to="/inside">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "white",
                  color: "black",
                }}
                className="flex items-center space-x-4 border border-white/50 px-8 py-4 rounded-full backdrop-blur-xl text-white transition-all duration-500 group shadow-2xl"
              >
                <span className="font-black text-[10px] tracking-[0.4em] uppercase">
                  Living Room
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="group-hover:-translate-x-1 transition-transform"
                >
                  {/* <path d="M19 12H5M12 19l-7-7 7-7" /> */}
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>

      {/* Label */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 text-white/10 text-[10px] font-black tracking-[1em] uppercase select-none pointer-events-none">
        Private Suite
      </div>
    </motion.div>
  );
};

export default Bedroom;
