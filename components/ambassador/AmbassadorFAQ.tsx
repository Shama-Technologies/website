import React from "react";
import { AmbassadorQuestionAnswer } from "../../lib/data";
import AmbassadorQA from "./AmbassadorQA";

const AmbassadorFAQ = () => {
  return (
    <section className="bg-[#F7F7FB] py-[50px] rounded-[20px] px-5">
      <h3 className="header3 text-center mb-10">FAQs</h3>
      <div className="grid gap-4 md:w-8/12 mx-auto">
        {AmbassadorQuestionAnswer.map((ques) => {
          return (
            <div className="" key={ques.question}>
              <AmbassadorQA
                question={ques.question}
                answer={
                  Array.isArray(ques.answer) ? ques.answer : [ques.answer]
                }
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AmbassadorFAQ;
