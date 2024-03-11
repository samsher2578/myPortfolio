"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface props {
  image: string;
  title: string;
  text: string;
}

const ProjectCard = ({ image, title, text }: props) => {
  const [isFlipped, setFlipped] = useState(false);
  const [isAnimating, setAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setFlipped(!isFlipped);
      setAnimating(true);
    }
  }
  return (
    <div className="w-[450px] h-[280px] rounded-md cursor-pointer">
      <motion.div
        className="flip-card-inner w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 300 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => setAnimating(false)}
      >
        <div
          style={{ backgroundImage: "url(${image})" }}
          className="w-full h-full flip-card-front bg-center text-white rounded-lg p-4"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40">
            <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center">
              Learn more &gt;
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: "url(${image})" }}
          className="w-full h-full flip-card-back bg-center text-white rounded-lg p-4"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]">
            <div className="flex flex-col gap-20 py-3 z-[30]">
              <h1 className="text-white text-2xl font-semibold">{title}</h1>
              <p className="text-gray-200 text-[20px]">{text}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
