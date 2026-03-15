// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { ShoppingBag, ChevronDown } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useCart } from "../context/CartContext";
// const Navbar = () => {
//   const [isRoomsOpen, setIsRoomsOpen] = useState(false);
//   const { cartItems, setIsCartOpen } = useCart();

//   // Total quantity calculate karne ke liye
//   const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
//   return (
//     <nav className="fixed top-0 left-0 w-full z-[100] px-12 py-8 flex justify-between items-center">
//       {/* Logo */}
//       <Link to="/" className="mix-blend-difference text-white">
//         <h1 className="text-2xl font-black uppercase tracking-tighter leading-none">
//           LUXEFURNISH
//           <span className="text-[10px] align-top ml-1 opacity-50 font-normal">
//             ©
//           </span>
//         </h1>
//       </Link>

//       {/* Nav Links */}
//       <div className="hidden lg:flex items-center space-x-12 text-[11px] font-black uppercase tracking-[0.3em] text-white mix-blend-difference">
//         <Link to="/manifesto" className="hover:opacity-50 transition-opacity">
//           Manifesto
//         </Link>
//         <Link to="/gifting" className="hover:opacity-50 transition-opacity">
//           Gifting
//         </Link>
//         <Link to="/shop" className="hover:opacity-50 transition-opacity">
//           Shop All
//         </Link>

//         {/* The Rooms with Pop-up */}
//         <div
//           className="relative group cursor-pointer"
//           onMouseEnter={() => setIsRoomsOpen(true)}
//           onMouseLeave={() => setIsRoomsOpen(false)}
//         >
//           <div className="flex items-center space-x-1 border border-white/40 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all">
//             <span>The Rooms</span>
//             <ChevronDown size={14} />
//           </div>

//           <AnimatePresence>
//             {isRoomsOpen && (
//               <motion.div
//                 initial={{ opacity: 0, y: 15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: 10 }}
//                 className="absolute top-full left-0 mt-4 w-48 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
//               >
//                 <Link
//                   to="/"
//                   className="block px-6 py-4 hover:bg-white hover:text-black transition-colors border-b border-white/10"
//                 >
//                   Garden
//                 </Link>
//                 <Link
//                   to="/inside"
//                   className="block px-6 py-4 hover:bg-white hover:text-black transition-colors border-b border-white/10"
//                 >
//                   Living Room
//                 </Link>
//                 <Link
//                   to="/inside/kitchen"
//                   className="block px-6 py-4 hover:bg-white hover:text-black transition-colors"
//                 >
//                   Kitchen
//                 </Link>
//                 <Link
//                   to="/inside/bedroom"
//                   className="block px-6 py-4 hover:bg-white hover:text-black transition-colors"
//                 >
//                   Bedroom
//                 </Link>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Icons */}
//       <div className="flex items-center space-x-8 text-white mix-blend-difference">
//         <div className="relative cursor-pointer group">
//           <ShoppingBag size={20} />
//           <span className="absolute -top-2 -right-2 bg-white text-black text-[9px] font-black h-4 w-4 rounded-full flex items-center justify-center">
//             {itemCount}
//           </span>{" "}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, ChevronDown, Menu, X } from "lucide-react"; // Added Menu/X icons
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isRoomsOpen, setIsRoomsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile state
  const { cartItems, setIsCartOpen } = useCart();

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const navLinks = [
    { name: "Manifesto", path: "/manifesto" },
    { name: "Gifting", path: "/gifting" },
    { name: "Shop All", path: "/shop" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-8 flex justify-between items-center">
      {/* 1. Logo - mix-blend ensures visibility on any image */}
      <Link to="/" className="mix-blend-difference text-white z-[110]">
        <h1 className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-none">
          LUXEFURNISH
          <span className="text-[10px] align-top ml-1 opacity-50 font-normal">
            ©
          </span>
        </h1>
      </Link>

      {/* 2. Desktop Nav Links (Hidden on Mobile) */}
      <div className="hidden lg:flex items-center space-x-12 text-[11px] font-black uppercase tracking-[0.3em] text-white mix-blend-difference">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="hover:opacity-50 transition-opacity"
          >
            {link.name}
          </Link>
        ))}

        <div
          className="relative group cursor-pointer"
          onMouseEnter={() => setIsRoomsOpen(true)}
          onMouseLeave={() => setIsRoomsOpen(false)}
        >
          <div className="flex items-center space-x-1 border border-white/40 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all">
            <span>The Rooms</span>
            <ChevronDown size={14} />
          </div>

          <AnimatePresence>
            {isRoomsOpen && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 mt-4 w-48 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl text-white"
              >
                {["Garden", "Living Room", "Kitchen", "Bedroom"].map((room) => (
                  <Link
                    key={room}
                    to={
                      room === "Garden"
                        ? "/"
                        : room === "Living Room"
                          ? "/inside"
                          : `/inside/${room.toLowerCase()}`
                    }
                    className="block px-6 py-4 hover:bg-white hover:text-black transition-colors border-b border-white/10 last:border-0"
                  >
                    {room}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* 3. Mobile/Desktop Icons & Mobile Trigger */}
      <div className="flex items-center space-x-6 md:space-x-8 text-white mix-blend-difference z-[110]">
        {/* Shopping Bag - Click to Open CartDrawer */}
        <div
          className="relative cursor-pointer"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingBag size={20} />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-white text-black text-[9px] font-black h-4 w-4 rounded-full flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 4. Full-screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-[105] flex flex-col justify-center px-10"
          >
            <div className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-black uppercase tracking-tighter text-white hover:text-white/50 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-10 border-t border-white/10 flex flex-col space-y-4">
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-black mb-2">
                  The Rooms
                </span>
                {["Garden", "Living Room", "Kitchen", "Bedroom"].map((room) => (
                  <Link
                    key={room}
                    to={
                      room === "Garden"
                        ? "/"
                        : room === "Living Room"
                          ? "/inside"
                          : `/inside/${room.toLowerCase()}`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-bold uppercase tracking-widest text-white/70"
                  >
                    {room}
                  </Link>
                ))}
              </div>
            </div>

            <div className="absolute bottom-12 left-10">
              <p className="text-[9px] uppercase tracking-[0.5em] text-white/20 font-black">
                © 2026 LUXEFURNISH Studio
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
