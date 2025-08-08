import { Featured } from "../../lib/data";
import Image from "next/image";
import React from "react";

const Feature = () => {
  return (
    <section className="sections z-50 bg-white py-[50px] md:py-[100px] text-black">
      <div>
        <h3 className="mb-[30px] md:mb-10 header3 ">Featured Content</h3>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {Featured.map((feature, index) => {
            return (
              <div key={feature.title} className="relative">
                <Image
                  src={feature.img}
                  alt={feature.title}
                  width={419}
                  height={445}
                  priority={index === 0}
                  className="rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <p
                  className={
                    feature.tag
                      ? "absolute top-0 text-white text-base font-semibold bg-gradient-to-r from-[#1F1B4C]/60 px-4 py-2 to-[#483FB2]/100 rounded-tl-md rounded-br-md"
                      : ""
                  }
                >
                  {feature.tag}
                </p>
                <h4 className="mt-[10px] mb-1 text-[22px] md:text-[28px] leading-9 font-medium">
                  {feature.title}
                </h4>
                <p className="text-sm md:text-base">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature;
