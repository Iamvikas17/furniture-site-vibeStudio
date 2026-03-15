import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const Hotspot = ({ x, y, title, price, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed z-30" style={{ left: `${x}%`, top: `${y}%` }}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.2 }}
        className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-xl border border-gray-300"
      >
        {isOpen ? <X size={14} /> : <Plus size={14} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="absolute bottom-12 left-[-80px] w-48 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100"
          >
            <h3 className="font-bold text-gray-900 text-sm">{title}</h3>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">
              {description}
            </p>
            <div className="mt-3 flex justify-between items-center">
              <span className="text-black font-semibold text-sm">{price}</span>
              <button className="text-[10px] bg-black text-white px-3 py-1 rounded-full uppercase font-bold">
                Buy
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hotspot;
