import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

export default function AllAnimationDemos() {
  // ===== 1. Simple Move & Sit =====
  const [moved, setMoved] = useState(false);

  // ===== 2. Fly to Cart =====
  const [cartCount, setCartCount] = useState(0);
  const [flyingItem, setFlyingItem] = useState(null);
  const cartRef = useRef(null);
  const productRef = useRef(null);

  const handleAddToCart = () => {
    if (!productRef.current || !cartRef.current) return;

    const productRect = productRef.current.getBoundingClientRect();
    const cartRect = cartRef.current.getBoundingClientRect();

    setFlyingItem({
      startX: productRect.left,
      startY: productRect.top,
      endX: cartRect.left + cartRect.width / 2 - 25,
      endY: cartRect.top + cartRect.height / 2 - 25,
    });

    setTimeout(() => {
      setCartCount((prev) => prev + 1);
      setFlyingItem(null);
    }, 750);
  };

  // ===== 3. Drag & Drop =====
  const [isInZone, setIsInZone] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        React Animation Demos (Framer Motion)
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* ===================== 1. Simple Move & Sit ===================== */}
        <div className="bg-white rounded-2xl shadow-md p-6 relative min-h-[420px]">
          <h2 className="text-lg font-semibold mb-4">1. Simple Move & Sit</h2>
          <p className="text-sm text-gray-500 mb-6">
            ক্লিক করলে প্রোডাক্ট সরে গিয়ে ডানপাশে বসবে
          </p>

          <motion.div
            layout
            onClick={() => setMoved(!moved)}
            className="w-32 h-40 bg-white rounded-xl shadow-lg cursor-pointer overflow-hidden border"
            animate={{
              x: moved ? 180 : 0,
              y: moved ? 60 : 0,
              scale: moved ? 0.9 : 1,
              rotate: moved ? -7 : 0,
            }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
          >
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300"
              className="w-full h-full object-cover"
              alt="watch"
            />
          </motion.div>

          {/* Drop Zone */}
          <div className="absolute top-36 right-6 w-36 h-44 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400 text-sm">
            Drop Zone
          </div>
        </div>

        {/* ===================== 2. Fly to Cart ===================== */}
        <div className="bg-white rounded-2xl shadow-md p-6 relative min-h-[420px]">
          <h2 className="text-lg font-semibold mb-4">2. Fly to Cart</h2>
          <p className="text-sm text-gray-500 mb-6">
            ক্লিক করলে প্রোডাক্ট কার্টে উড়ে যাবে
          </p>

          {/* Cart Button */}
          <div
            ref={cartRef}
            className="absolute top-5 right-5 bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm shadow-md z-20"
          >
            🛒
            <span className="bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </div>

          {/* Product */}
          <div
            ref={productRef}
            onClick={handleAddToCart}
            className="w-32 h-40 bg-white rounded-xl shadow-lg cursor-pointer overflow-hidden border mt-8"
          >
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300"
              className="w-full h-full object-cover"
              alt="shoe"
            />
          </div>

          {/* Flying Item */}
          <AnimatePresence>
            {flyingItem && (
              <motion.div
                initial={{
                  position: "fixed",
                  left: flyingItem.startX,
                  top: flyingItem.startY,
                  width: 128,
                  height: 160,
                  opacity: 1,
                  scale: 1,
                  zIndex: 50,
                }}
                animate={{
                  left: flyingItem.endX,
                  top: flyingItem.endY,
                  width: 36,
                  height: 45,
                  opacity: 0.5,
                  scale: 0.25,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="rounded-lg overflow-hidden shadow-xl pointer-events-none"
              >
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300"
                  className="w-full h-full object-cover"
                  alt="flying"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ===================== 3. Drag & Drop ===================== */}
        <div className="bg-white rounded-2xl shadow-md p-6 relative min-h-[420px]">
          <h2 className="text-lg font-semibold mb-4">3. Drag & Drop</h2>
          <p className="text-sm text-gray-500 mb-6">
            প্রোডাক্ট ড্র্যাগ করে ডানপাশের বক্সে ছাড়ো
          </p>

          {/* Drop Zone */}
          <div className="absolute top-32 right-6 w-36 h-44 border-2 border-dashed border-indigo-400 rounded-xl flex items-center justify-center text-indigo-400 text-sm bg-indigo-50">
            Drop Here
          </div>

          {/* Draggable Product */}
          <motion.div
            drag
            dragConstraints={{ left: -20, right: 220, top: -20, bottom: 180 }}
            dragElastic={0.12}
            onDragEnd={(e, info) => {
              // সহজ লজিক: যদি ডানদিকে যথেষ্ট সরানো হয়
              if (info.point.x > 180) {
                setIsInZone(true);
              } else {
                setIsInZone(false);
              }
            }}
            animate={
              isInZone
                ? { x: 170, y: 30, scale: 0.9, rotate: -6 }
                : { x: 0, y: 0, scale: 1, rotate: 0 }
            }
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            whileDrag={{
              scale: 1.06,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            }}
            className="w-32 h-40 bg-white rounded-xl shadow-lg cursor-grab active:cursor-grabbing overflow-hidden border"
          >
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300"
              className="w-full h-full object-cover"
              alt="headphones"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
