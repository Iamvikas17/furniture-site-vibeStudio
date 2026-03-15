LuxeFurnish | Immersive Interior E-Commerce
A premium, spatial-navigation e-commerce platform built with React, Tailwind CSS, and Framer Motion. LuxeFurnish moves away from traditional grid-only shopping to an interactive "Virtual Tour" experience where users explore curated rooms to discover products.
✨ Key Features
Spatial Room Navigation: A seamless horizontal-scroll experience allowing users to move between the Garden, Living Room, Kitchen, and Bedroom.

Interactive Hotspots: Visual product anchors within each room that reveal pricing and details on hover.

Global Cart System: Integrated React Context API to manage a persistent shopping bag across all virtual environments.

Dynamic Product Discovery: A "Shop All" grid with advanced filtering logic and real-time state updates.

Responsive Motion UI: Mobile-optimized layouts featuring fluid slide-out drawers and full-screen overlay menus powered by Framer Motion
Technical Stack
Frontend: React.js (Vite)

Styling: Tailwind CSS

Animations: Framer Motion & AnimatePresence

State Management: React Context API

Routing: React Router Dom

Deployment: Vercel
📂 Project Structure
src/
├── assets/          # High-resolution interior imagery
├── components/      # Reusable UI (Navbar, CartDrawer, Hotspots)
├── context/         # CartContext for global state management
├── pages/           # Room views (Garden, Kitchen, etc.) and ShopAll
└── App.jsx          # Root component with Route configuration
