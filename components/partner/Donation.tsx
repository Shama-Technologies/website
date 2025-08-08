import { DonationOption } from "../../lib/data";
import React from "react";

const Donation = () => {
  return (
    <section
      id="donate"
      className="sections bg-[#F0F3FD] mt-10 lg:mt-24 py-[50px] md:py-[100px]"
    >
      <div>
        <div>
          <h3 className="header3">Donation Options</h3>
        </div>
        <div className="flex mt-8 md:mt-14 items-start gap-4 md:gap-7">
          <ul className="text-[20px] text-[#483FB2] leading-7 font-bold">
            <li>01</li>
            <li className="h-[40px] w-[1px] mx-auto mt-10 rounded-full bg-[#929CE7]"></li>
            <li>02</li>
            <li className="h-[40px] w-[1px] mx-auto mt-10 rounded-full bg-[#929CE7]"></li>
            <li>03</li>
          </ul>
          <div className="grid gap-4 md:gap-10">
            {DonationOption.map((donate) => {
              return (
                <div key={donate.title}>
                  <h5 className="font-bold leading-7 text-[20px]">
                    {donate.title}
                  </h5>
                  <p className="font-normal mt-4 text-base">
                    {donate.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <button
          type="button"
          className="flex py-3 md:py-4 px-9 md:px-[50px] text-white font-bold text-xl rounded-lg  bg-[#483FB2] mt-10"
        >
          Donate now
        </button>
      </div>
    </section>
  );
};

export default Donation;
