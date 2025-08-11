import Image from "next/image";
import React from "react";

const GetStarted = () => {
  return (
    <section className="bg-[#483FB2]  flex max-md:flex-col justify-between rounded-3xl  mb-10 text-white md:px-10 pt-10">
      <div className="max-md:text-center flex flex-col max-md:items-center pb-10">
        <h3 className="text-base leading-6 md:text-2xl">
          Amplify your message, <span>reach more souls</span>
        </h3>
        <p className="py-5 w-4/5 text-base md:text-2xl ">
          Join Shama and share your sermons, podcasts, and gospel content with
          global audience. Let your voice inspire people beyond your reach.
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSekRZyaWM-4kK--pdI377oQ16AW1u2DR5SQhKHySG7S4AjqUg/viewform?embedded=true">
          <button
            type="button"
            className="bg-gradient-to-b from-[#483FB2] via-[#191830] to-[#483FB2] text-white font-bold w-fit mx-auto rounded-lg px-5 py-4"
          >
            Get started
          </button>
        </a>
      </div>
      <div>
        <Image
          src="/images/shamaIphone.png"
          alt="Shama Iphone"
          width={335}
          height={400}
          className="md:h-[240px]"
        />
      </div>
    </section>
  );
};

export default GetStarted;
