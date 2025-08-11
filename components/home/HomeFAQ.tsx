import { HomeQuestionAnswer } from "../../lib/data";
import React from "react";
import HomeQA from "./HomeQA";
// import AccordionTransition from "./QA";
// import { useState } from "react";

const HomeFAQ = () => {
  return (
    <section className="bg-[#F7F7FB] py-[50px] rounded-[20px] px-5">
      <h3 className="header3 text-center mb-10">FAQs</h3>
      <div className="grid gap-4 md:w-8/12 mx-auto">
        {HomeQuestionAnswer.map((ques) => {
          return (
            <div className="" key={ques.question}>
              <HomeQA question={ques.question} answer={ques.answer} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeFAQ;
