"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./LoadingScreen";
import Navbar from "./Navbar";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <Navbar />
      <div style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.6s ease-out" }}>
        {children}
      </div>
    </>
  );
}
