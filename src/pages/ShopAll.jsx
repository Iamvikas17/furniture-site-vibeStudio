// export default ShopAll;
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";

// const ShopAll = () => {
//   const [filter, setFilter] = useState("All");

//   const products = [
//     {
//       id: 1,
//       category: "Living",
//       name: "Nordic Sofa",
//       price: "$2,400",
//       img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070",
//     },
//     {
//       id: 2,
//       category: "Living",
//       name: "Oak Table",
//       price: "$920",
//       img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069",
//     },
//     {
//       id: 3,
//       category: "Bedroom",
//       name: "Cloud Bed",
//       price: "$3,400",
//       img: bed,
//     },
//     {
//       id: 4,
//       category: "Bedroom",
//       name: "Moon Lamp",
//       price: "$150",
//       img: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=2000",
//     },
//     {
//       id: 5,
//       category: "Kitchen",
//       name: "Island",
//       price: "$3,200",
//       img: isLand,
//     },
//     {
//       id: 6,
//       category: "Kitchen",
//       name: "Kettle",
//       price: "$180",
//       img: kettle,
//     },
//   ];

//   const filteredItems =
//     filter === "All" ? products : products.filter((p) => p.category === filter);

//   return (
//     // 'min-h-screen' ensures the background stays dark even if page is long
//     <div className="w-full min-h-screen bg-[#0A0A0A] text-white">
//       <Navbar />

//       <main className="pt-44 px-6 md:px-16 max-w-[1400px] mx-auto">
//         <div className="mb-32">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-5xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.8]"
//           >
//             Curated <br /> Collection
//           </motion.h1>

//           <div className="flex flex-wrap gap-4 mt-20 border-t border-white/10 pt-10">
//             {["All", "Living", "Kitchen", "Bedroom"].map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setFilter(cat)}
//                 className={`text-[11px] font-black uppercase tracking-widest px-10 py-5 rounded-full border transition-all ${
//                   filter === cat
//                     ? "bg-white text-black border-white"
//                     : "text-white/30 border-white/10"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Grid will now expand and enable scroll naturally */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-32 pb-40">
//           {filteredItems.map((item) => (
//             <div key={item.id} className="flex flex-col group">
//               <div className="relative aspect-square bg-[#111] overflow-hidden">
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
//                 />
//               </div>
//               <div className="mt-8 flex justify-between items-end border-b border-white/10 pb-6">
//                 <h3 className="text-3xl font-black uppercase tracking-tighter">
//                   {item.name}
//                 </h3>
//                 <p className="text-2xl font-light">{item.price}</p>
//               </div>
//               <button className="mt-8 py-6 bg-white text-black text-[10px] font-black uppercase tracking-[0.4em] hover:invert transition-all">
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ShopAll;
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import bed from "../assets/Shop/bed.webp";
import kettle from "../assets/Shop/kettle.jpg";
import isLand from "../assets/Shop/isLand.jpg";
import Table from "../assets/Shop/Table.webp";
import lamp from "../assets/Shop/lamp.webp";
import sofa from "../assets/Shop/sofa.webp";
import { useCart } from "../context/CartContext";
const ShopAll = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      category: "Living",
      name: "Nordic Sofa",
      price: "$2,400",
      img: sofa,
    },
    { id: 2, category: "Living", name: "Oak Table", price: "$920", img: Table },
    {
      id: 3,
      category: "Bedroom",
      name: "Cloud Bed",
      price: "$3,400",
      img: bed,
    },
    { id: 4, category: "Bedroom", name: "Moon Lamp", price: "$150", img: lamp },
    {
      id: 5,
      category: "Kitchen",
      name: "Island",
      price: "$3,200",
      img: isLand,
    },
    { id: 6, category: "Kitchen", name: "Kettle", price: "$180", img: kettle },
  ];

  const filteredItems =
    filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    /* h-auto + overflow-x-hidden is the most important fix here */
    <div className="w-full min-h-screen h-auto bg-[#0A0A0A] text-white overflow-x-hidden overflow-y-auto">
      <Navbar />

      <main className="pt-32 md:pt-44 px-4 md:px-16 w-full max-w-[1400px] mx-auto box-border">
        {/* --- HEADER --- */}
        <div className="w-full mb-12 md:mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.9] md:leading-[0.8] mb-8 md:mb-12 break-words"
          >
            Curated <br /> Collection
          </motion.h1>

          {/* Filter Container: Forced to stay inside screen */}
          <div className="w-full flex overflow-x-auto no-scrollbar gap-3 border-t border-white/10 pt-8 pb-4">
            {["All", "Living", "Kitchen", "Bedroom"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest px-6 md:px-8 py-3 md:py-4 rounded-full border transition-all flex-shrink-0 ${
                  filter === cat
                    ? "bg-white text-black border-white"
                    : "text-white/30 border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- GRID: Using 'w-full' and 'grid-cols-1' for mobile --- */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 md:gap-x-10 gap-y-12 md:gap-y-20 pb-24 md:pb-40">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="w-full flex flex-col group overflow-hidden cursor-pointer"
              onClick={() => setSelectedProduct(item)}
            >
              {/* Force square aspect and ensure image fits within parent */}
              <div className="relative w-full aspect-square bg-[#111] overflow-hidden rounded-sm">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 transition-all duration-700 block"
                />
              </div>
              <div className="mt-6 flex justify-between items-end border-b border-white/5 pb-4">
                <div className="max-w-[70%]">
                  <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter truncate">
                    {item.name}
                  </h3>
                  <p className="text-[8px] md:text-[9px] uppercase tracking-widest opacity-30 mt-1">
                    {item.category}
                  </p>
                </div>
                <p className="text-lg md:text-xl font-light">{item.price}</p>
              </div>
              <button
                className="mt-4 w-full py-4 bg-white text-black text-[9px] font-black uppercase tracking-[0.3em] active:scale-95 transition-all
              "
                onClick={() => addToCart(item)}
              >
                Add to Bag
              </button>
            </div>
          ))}
        </div>
      </main>
      {/* --- PRODUCT DETAIL OVERLAY --- */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            {/* Background Dimmer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150]"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-[#0F0F0F] z-[160] p-8 md:p-12 overflow-y-auto border-l border-white/10 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-10 right-10 text-white/50 hover:text-white uppercase text-[10px] tracking-widest font-bold"
              >
                [ Close ]
              </button>

              {/* Product Info */}
              <div className="mt-20">
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-black">
                  {selectedProduct.category} Collection
                </span>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mt-4 leading-none">
                  {selectedProduct.name}
                </h2>
                <p className="text-2xl mt-4 font-light text-white/80">
                  {selectedProduct.price}
                </p>

                {/* Product Image */}
                <div className="aspect-square w-full bg-[#1A1A1A] mt-10 rounded-sm overflow-hidden border border-white/5">
                  <img
                    src={selectedProduct.img}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Configuration Options */}
                <div className="mt-12 space-y-10">
                  {/* Size Selector */}
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest mb-4">
                      Select Size
                    </h4>
                    <div className="flex gap-3">
                      {["Standard", "Grand", "Studio"].map((size) => (
                        <button
                          key={size}
                          className="px-6 py-3 border border-white/10 hover:border-white text-[9px] uppercase font-bold transition-all"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Finish/Color Selector */}
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest mb-4">
                      Finish
                    </h4>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-white border border-white/20 cursor-pointer" />
                      <div className="w-8 h-8 rounded-full bg-[#333] border border-white/20 cursor-pointer" />
                      <div className="w-8 h-8 rounded-full bg-[#8B4513] border border-white/20 cursor-pointer" />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="border-t border-white/10 pt-10">
                    <h4 className="text-[10px] font-black uppercase tracking-widest mb-4">
                      Description
                    </h4>
                    <p className="text-xs text-white/50 leading-relaxed uppercase tracking-widest font-medium">
                      Individually handcrafted in Mumbai. This piece features
                      premium sustainable materials and the iconic Studio design
                      language.
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-4 pt-10">
                    <button className="w-full py-6 bg-white text-black text-[10px] font-black uppercase tracking-[0.4em] hover:bg-transparent hover:text-white border border-white transition-all">
                      Add to Cart
                    </button>
                    <button className="w-full py-6 border border-white/20 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white/5 transition-all">
                      Buy It Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* --- FOOTER: Fixed width issue --- */}
      <footer className="w-full bg-[#111] py-12 md:py-20 px-6 md:px-16 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">
              STUDIO INTERIOR
            </h2>
            <p className="text-xs opacity-40 max-w-xs uppercase tracking-widest font-bold">
              Premium furniture built by Vikas.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
            <div className="space-y-2">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                Quick Link
              </h4>
              <ul className="text-[10px] uppercase opacity-60 space-y-2">
                <li>Garden</li>
                <li>Living</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                Legal
              </h4>
              <p className="text-[10px] uppercase opacity-60">Privacy</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShopAll;
