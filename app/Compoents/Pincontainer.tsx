"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";
import Link from "next/link";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  // 🔄 Start tilted backward
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(40deg) scale(0.8)"
  );

  const onMouseEnter = () => {
    // 🟩 Become upright on hover
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  const onMouseLeave = () => {
    // 🟦 Return to backward tilt
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };

  return (
    <div
      className={cn(
        "relative group/pin z-50 cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    //   href={href || "/"}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 p-4 top-1/2  justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-[#d1b18a] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden flex opacity-0 hover:opacity-100  "
        >
          <div className={cn("relative z-50", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} href={href} />
    </div>
  );
};




















export const PinPerspective= ({
  title,
  href,
}: {
  title?: string;
  href?: string;
}) => {
  return (
    <motion.div className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-100 group-hover/pin:opacity-0 z-[60] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none relative">
        {/* Title bar */}
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <Link
          href=""
            // href={href}
            target="_blank"
            className="relative flex items-center space-x-2 z-10 rounded-full bg-[#8d5e26] py-0.5 px-4 ring-1 ring-white/10"
          >
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>
             <span className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0"></span>

          </Link>
        </div>

        {/* Circular pulse effect */}
        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute mt-5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          {[0, 2, 4].map((delay) => (
            <motion.div
              key={delay}
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: delay,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-full bg-[#8d5e26] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          ))}
        </div>

        {/* Light beam effect */}
        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-[#8d5e26] translate-y-[14px] w-px h-40 blur-[0px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-[#8d5e26] translate-y-[14px] w-px h-20" />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-[#8d5e26] translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-[#8d5e26] translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
        </>
      </div>
    </motion.div>
  );
};



















export const PinPerspective1 = ({
  title,
  href,
}: {
  title?: string;
  href?: string;
}) => {
  return (
    <motion.div className="pointer-events-none w-96 h-80 flex items-centre justify-centre opacity-100 group-hover/pin:opacity-50 z-[60] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        {/* Title bar */}
        <div className="absolute top-0 inset-x-0 flex justify-centre">
          <a
            href={href}
            target={"_blank"}
            className="relative flex space-x-2 items-centre z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10"
          >
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </a>
        </div>

        {/* Circular pulse effect */}
        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            {[0, 2, 4].map((delay) => (
              <motion.div
                key={delay}
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: "-50%",
                  y: "-50%",
                }}
                animate={{
                  opacity: [0, 1, 0.5, 0],
                  scale: 1,
                  z: 0,
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: delay,
                }}
                className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
              ></motion.div>
            ))}
          </>
        </div>

        {/* Light beam effect */}
        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
        </>
      </div>
    </motion.div>
  );
};
