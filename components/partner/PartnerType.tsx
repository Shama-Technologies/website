import { PartnershipTypes, PartnerWithUs } from "../../lib/data";
import Image from "next/image";
import React from "react";

const PartnerType = () => {
  return (
    <section className=" ">
      <div className="sections py-[50px] md:py-[100px]">
        <div>
          <h3 className="header3 mb-12 max-md:text-center">
            Types of partnerships
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PartnershipTypes.map((partner) => {
            return (
              <div
                key={partner.title}
                className="w-full border border-inputGradient"
              >
                <div className="relative">
                  <div className="relative w-full aspect-square overflow-hidden">
                    <Image
                      src={partner.img}
                      alt={partner.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                    <div className="absolute bg-black/50 inset-0"></div>
                  </div>
                  <p className="absolute top-0 left-0 bg-[#483FB2] text-white text-sm font-bold  px-2 rounded-br-lg">
                    {partner.tag}
                  </p>
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-justify text-base">
                    {partner.title}
                  </h4>
                  <p className="text-[12px] mt-1  font-normal">
                    {partner.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative sections py-[50px] md:py-[100px] text-white bg-gradient-to-b from-[#191830] via-[#0C0B15] to-[#19182F]">
        {/* Content */}
        <div className="relative z-20 text-center  mx-auto lg:px-4 sm:px-8">
          <h3 className="text-3xl md:text-5xl font-bold">Partner with Us</h3>
          <p className="text-base md:text-lg mt-2">
            Let&apos;s work together to amplify the message of the kingdom
          </p>

          {/* Partner Grid */}
          <div className="grid gap-[30px] mt-12 md:mt-24 text-left">
            {PartnerWithUs.map((partnerwith, index) => (
              <div key={index} className="flex items-start gap-4">
                <Image src="/icons/dot.svg" alt="dot" width={20} height={20} />
                <div>
                  <h4 className="text-xl font-semibold">{partnerwith.title}</h4>
                  <p className="mt-2 text-sm md:text-base">
                    {partnerwith.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 max-md:hidden right-20 bottom-10 flex justify-end items-end">
          <Image
            src="/images/partnerIphoneImg.png"
            alt="Shama image"
            width={525}
            height={422}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnerType;
