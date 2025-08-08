"use client";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Iprops {
  question: string;
  answer: string;
}

const QA = ({ question, answer }: Iprops) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border bg-white rounded-lg md:rounded-[18px] px-2 md:px-10 py-4 md:py-7 shadow-md ${
        open ? "border-2 border-[#483FB2]" : ""
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="cursor-pointer transition-all duration-300 flex justify-between items-start md:items-center w-full"
      >
        <h5 className="text-xs md:text-xl font-medium">{question}</h5>
        {open ? (
          <div className="bg-[#483FB2] px-2 py-2 rounded-full">
            <IoIosArrowDown
              fontSize={24}
              className="text-white h-[16px] w-[16px] transition-all duration-300"
            />
          </div>
        ) : (
          <div className="bg-[#F0F3FD] px-2 py-2 rounded-full">
            <IoIosArrowForward
              fontSize={24}
              className=" text-[#483FB2] h-[16px] w-[16px] transition-all duration-300"
            />
          </div>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden mt-2"
          >
            <p className="text-sm text-[#6F6C90] md:text-base w-[90%]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QA;
