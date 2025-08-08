import { BecomeAmbassador, WhyAmbassador } from "../../lib/data";
import Image from "next/image";
import React from "react";
import AmbassadorForm from "../forms/AmbassadorForm";

// name
// email address
// one time payment
// recurrect payment

const Ambassador = () => {
  return (
    <div className="">
      <div className=" sections my-10 lg:my-[100px] py-[60px] bg-[#F6F7F8]">
        <h3 className="header3 text-center  mb-[40px]">
          Why Become an Ambassador?
        </h3>
        <div className="grid md:grid-cols-4  gap-[30px]">
          {WhyAmbassador.map((ambassador) => {
            return (
              <div
                key={ambassador.title}
                className={`p-3 ${
                  (ambassador.className === "premium" &&
                    "rounded-md border border-[#E7E55D] bg-[#FAFBEB] shadow-[0px_4px_4px_0px_#F0F2A6]") ||
                  (ambassador.className === "leadership" &&
                    "rounded-md border border-[#90E5A3] bg-[#DFF9E4] shadow-[0px_4px_4px_0px_#28A745]") ||
                  (ambassador.className === "networking" &&
                    "rounded-md border border-[#89934F] bg-[#E5E7CF] shadow-[0px_4px_4px_0px_#89934F]") ||
                  (ambassador.className === "rewards" &&
                    "rounded-md border border-[#17A2B8] bg-[#D3F7FA] shadow-[0px_4px_4px_0px_#17A2B8]") ||
                  (ambassador.className === "internship" &&
                    "rounded-md border border-[#E74C3C] bg-[#FDE5E3] shadow-[0px_4px_4px_0px_#E74C3C]") ||
                  (ambassador.className === "career" &&
                    "rounded-md border border-[#7072E4] bg-[#E3E8FC] shadow-[0px_4px_4px_0px_#7072E4]") ||
                  (ambassador.className === "support" &&
                    "rounded-md border border-[#EB46F4] bg-[#EDDBEE] shadow-[0px_4px_4px_0px_#EB46F4]") ||
                  (ambassador.className === "ministry" &&
                    "rounded-md border border-[#6EED6E] bg-[#E6EBE6] shadow-[0px_4px_4px_0px_#6EED6E]")
                } 
                `}
              >
                <Image
                  src={ambassador.img}
                  alt={ambassador.title}
                  width={70}
                  height={70}
                  className="rounded-lg"
                />
                <h5 className="my-3">{ambassador.title}</h5>
                <p>{ambassador.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="sections py-[50px] md:py-[100px] text-white bg-gradient-to-b from-[#191830] via-[#0C0B15] to-[#19182F]">
        <h3 className="header3 text-center mb-[60px]">
          All you need to become an Ambassador
        </h3>
        <div className="flex justify-between">
          <div>
            {" "}
            <div className="grid gap-[30px]">
              {BecomeAmbassador.map((become) => {
                return (
                  <div key={become} className="flex items-center gap-[30px]">
                    <Image
                      src="/icons/dot.svg"
                      alt="point"
                      width={20}
                      height={20}
                      //   className="rounded-lg"
                    />
                    <p className="text-base lg:text-xl">{become}</p>
                  </div>
                );
              })}
            </div>
            <AmbassadorForm label="Apply Now" />
          </div>
          <div className="">
            <Image
              src="/icons/strokes.svg"
              alt="point"
              width={20}
              height={20}
              //   className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ambassador;
