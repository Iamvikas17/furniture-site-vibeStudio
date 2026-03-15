import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Garden from "./pages/Garden";
import LivingRoom from "./pages/LivingRoom";
import Kitchen from "./pages/Kitchen";
import Bedroom from "./pages/Bedroom";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import ShopAll from "./pages/ShopAll";
import { CartProvider } from "./context/CartContext";
import CartDrawer from "./pages/CartDrawer";
import Manifesto from "./pages/Manifesto";
import Gifting from "./pages/Gifting";
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Garden />} />
        <Route path="/inside" element={<LivingRoom />} />
        <Route path="/inside/kitchen" element={<Kitchen />} />
        <Route path="/inside/bedroom" element={<Bedroom />} />
        <Route path="/shop" element={<ShopAll />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="/gifting" element={<Gifting />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        {/* <CustomCursor /> */}
        <Navbar />
        <CartDrawer />
        <AnimatedRoutes />
      </Router>
    </CartProvider>
  );
}

export default App;
