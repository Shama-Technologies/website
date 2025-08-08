import { Whyshama } from "../../lib/data";
// import React from "react";

const WhyShama = () => {
  return (
    <section className="sections py-[50px] md:py-[100px] relative bg-gradient-to-b from-[#191830]/100 from-0% via-[#0C0B15]/100 via-50%  to-[#19182F]/100 to-100%">
      <div className="w-full h-[30px] left-0 top-3 blur-lg absolute bg-gradient-to-r from-[#999999]/0 from-0% to-[#483FB2]/80 to-100%"></div>
      <div className="lg:w-[90%] mx-auto">
        <div className="text-center">
          <h3 className="header3 text-white">Why Choose SHAMA</h3>
          <p className="text-base lg:textDefault py-7">
            Explore our core features that empowers your spiritual journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-7">
          {Whyshama.map((whyshama) => {
            return (
              <div
                key={whyshama.title}
                className="flex gap-2 md:gap-5 items-start py-3 px-4 rounded-lg bg-gradient-to-r from-[#999999]/0 from-0% to-[#483FB2]/40 to-100%"
              >
                <p className="bg-[#483FB2] w-4 h-3"></p>
                <div>
                  <h5 className="text-xl font-bold">{whyshama.title}</h5>
                  <p className="text-base font-normal">
                    {whyshama.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full h-[30px] right-0 bottom-0 blur-lg absolute bg-gradient-to-r from-[#999999]/0 from-0% to-[#483FB2]/80 to-100%"></div>
    </section>
  );
};

export default WhyShama;
