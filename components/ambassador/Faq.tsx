import { QuestionAnswer } from "../../lib/data";
import QA from "./QA";
// import AccordionTransition from "./QA";
// import { useState } from "react";

const Faq = () => {
  return (
    <section className="bg-[#F7F7FB] py-[50px] rounded-[20px] px-5">
      <h3 className="header3 text-center mb-10">FAQs</h3>
      <div className="grid gap-4 md:w-8/12 mx-auto">
        {QuestionAnswer.map((ques) => {
          return (
            <div className="" key={ques.question}>
              <QA question={ques.question} answer={ques.answer} />
              {/* <AccordionTransition /> */}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
