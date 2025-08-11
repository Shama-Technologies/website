import Ambassador from "../../components/ambassador/Ambassador";

import React from "react";

import AmbassadorFAQ from "../../components/ambassador/AmbassadorFAQ";
import AmbassadorForm from "../../components/forms/AmbassadorForm";

const page = () => {
  return (
    <section>
      <section className="relative grid place-content-center py-[70px] md:py-[100px] text-white bg-[url('/images/ambassadorHeroBg.png')] bg-no-repeat object-fill lg:bg-cover bg-center h-screen">
        {/* Overlay */}
        <div className="absolute left-0 top-20 bg-[#483FB2] z-30  blur-2xl  h-[131px] w-[131px] "></div>
        <div className="absolute  left-[45%] top-[50%] bg-[#483FB2] z-30  blur-[80px]  h-[200px] w-[200px] "></div>
        <div className="hiddend md:block absolute -right-10 top-[40%] bg-[#483FB2] z-30  blur-[80px]  h-[250px] w-[250px] "></div>
        <div className="absolute inset-0 bg-[#191830E3]/90"></div>

        {/* Content */}
        <div className="relative z-40 text-center  lg:max-w-[72%] mt-16 mx-auto px-4 sm:px-8">
          <h2 className="text-[28px] leading-7 md:text-[50px] md:leading-[80px] font-bold">
            Become a Shama Ambassador
          </h2>
          <p className="mt-[46px] mb-[57px] my-10 text-base md:text-lg xl:text-[30px] leading-10 lg:leading-[45px] font-normal">
            Shama is on a mission to make Kingdom content easily accessible to
            believers across the world. As a Shama Ambassador, you’ll play a
            vital role in helping more people discover and engage with
            faith-based content that transforms lives.
          </p>
          <div className="w-fit mx-auto cursor-pointer">
            <AmbassadorForm label="Register here" />
          </div>
        </div>
      </section>
      <Ambassador />
      <div className="sections mt-10">
        <AmbassadorFAQ />
      </div>
    </section>
  );
};

export default page;
