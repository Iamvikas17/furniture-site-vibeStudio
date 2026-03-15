import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

const CartDrawer = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, totalPrice } =
    useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-[#0F0F0F] z-[210] p-10 flex flex-col border-l border-white/10"
          >
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-2xl font-black text-stone-200 uppercase tracking-tighter">
                Your Bag ({cartItems.length})
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-[10px] uppercase text-stone-200 tracking-widest opacity-50"
              >
                [ Close ]
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-8 no-scrollbar">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 border-b border-white/5 pb-6"
                >
                  <div className="w-24 h-24 bg-[#1A1A1A] overflow-hidden">
                    <img
                      src={item.img}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-black text-stone-200 uppercase tracking-widest">
                      {item.name}
                    </h3>
                    <p className="text-xs text-stone-200 opacity-40 mt-1">
                      {item.price} x {item.quantity}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-[8px] uppercase mt-4 text-stone-200 font-bold tracking-widest"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-10 border-t border-white/10">
              <div className="flex justify-between mb-8">
                <span className="text-[10px] uppercase text-stone-200 font-black opacity-40">
                  Subtotal
                </span>
                <span className="text-xl text-stone-200 font-black">
                  ${totalPrice.toLocaleString()}
                </span>
              </div>
              <button className="w-full py-6 bg-white text-black text-[10px] font-black uppercase tracking-[0.4em] hover:invert transition-all">
                Checkout Now
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
export default CartDrawer;
