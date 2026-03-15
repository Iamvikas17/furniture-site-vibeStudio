import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const UnderDevelopment = ({ pageName }) => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-[#0A0A0A] text-white flex flex-col items-center justify-center p-6 md:p-10 overflow-hidden relative">
      {/* Background Stylized Text (Optional Aesthetic) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02]">
        <h1 className="text-[20vw] font-black uppercase tracking-tighter">
          Studio
        </h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10"
      >
        {/* Page Identifier */}
        <span className="text-[10px] md:text-[12px] uppercase tracking-[0.6em] text-white/40 font-black mb-6 block">
          Section: {pageName || "Unknown"}
        </span>

        {/* Main Heading */}
        <h2 className="text-6xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] mb-12">
          Coming <br /> Soon
        </h2>

        {/* Description */}
        <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] opacity-30 max-w-sm mx-auto mb-16 leading-relaxed font-bold">
          We are currently crafting a premium digital experience. <br />
          Stay tuned for the unveiling.
        </p>

        {/* Navigation Button */}
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "white", color: "black" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="px-14 py-6 border border-white/20 text-[10px] font-black uppercase tracking-[0.5em] transition-all duration-500"
        >
          [ Go Back ]
        </motion.button>
      </motion.div>

      {/* Decorative Corner Text */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-10 text-[9px] font-black uppercase tracking-[1em]">
        Design in Progress // 2026
      </div>
    </div>
  );
};

export default UnderDevelopment;
