import VisionMission from "@/components/about/VissionMission";
import GetStarted from "@/components/home/GetStarted";

import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="overflow-hidden">
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-[500px]"
        style={{ backgroundImage: "url('/images/AboutHeroBg.png')" }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[#131324B8]/90"></div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col mt-10 text-white px-4 sm:px-8 lg:px-16 py-10 md:pt-32">
          <h2 className="text-4xl md:text-6xl text-center lg:text-7xl font-bold leading-tight">
            Welcome to SHAMA
          </h2>
          <p className="text-lg md:text-xl text-center lg:text-2xl mt-4 ">
            Empowering Christians worldwide to grow in faith and community.
          </p>

          <div className="text-base mt-8 text-white font-normal md:text-lg lg:text-[28px]  lg:leading-[40px] ">
            <p>
              In 2024, we received a mandate from God to preserve the heritage
              of the Christian faith digitally. SHAMA was established as a
              gospel digital platform aimed to bridge the gap between God&apos;s
              words and His people.
            </p>
            <p>
              In today&apos;s digital age, social media platforms are flooded
              with a vast amount of content, making it increasingly challenging
              to discern truth from deception. Additionally, Kingdom content
              struggles to have as much visibility as it should due to
              censorship and propaganda against it.
            </p>
            <p className="mt-10">
              Shama aims to provide a refuge from the chaos of misinformation.
              Offering to create a centralized digital space where Christians
              can easily stream, download, and engage with diverse Christian
              content. We aim to aid spiritual growth, strengthen community
              connections, and provide enriching resources that support and
              enhance the Christian journey.
            </p>
          </div>
          <Link href="/partner" className="w-fit mx-auto mt-12">
            <button className=" bg-[#483FB2] text-white  text-lg md:text-xl font-bold py-3 px-8 md:py-4 md:px-12 rounded-lg">
              Partner with us
            </button>
          </Link>
        </div>
      </section>
      <VisionMission />
      <div className="sections mt-10">
        <GetStarted />
      </div>
    </section>
  );
};

export default page;
