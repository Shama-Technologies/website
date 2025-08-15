import Image from "next/image";
import React from "react";

const GetStarted = () => {
  return (
    <section className="bg-[#483FB2]  flex max-md:flex-col justify-between rounded-3xl  mb-10 text-white md:px-10 pt-10">
      <div className="max-md:text-center px-4 flex flex-col max-md:items-center pb-10">
        <h3 className="text-base leading-6 md:text-4xl">
          Amplify your message,{" "}
          <span style={{ fontStyle: "italic" }} className="italics">
            reach more souls
          </span>
        </h3>
        <p className="py-5 md:w-4/6 text-base md:text-3xl ">
          Join Shama and share your sermons, podcasts, and gospel content with
          global audience. Let your voice inspire people beyond your reach.
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSekRZyaWM-4kK--pdI377oQ16AW1u2DR5SQhKHySG7S4AjqUg/viewform?embedded=true">
          <button
            type="button"
            className="bg-gradient-to-b text:lg md:text-[28px] bold rounded-2xl from-[#191830] from-10% via-[#0C0B15] via-80% to-[#19182F] to-10% text-white font-bold  px-10 md:px-14 py-4"
          >
            Get started
          </button>
        </a>
      </div>
      <div>
        <Image
          src="/images/shamaIphone.png"
          alt="Shama Iphone"
          width={900}
          height={500}
          className=""
        />
      </div>
    </section>
  );
};

export default GetStarted;
