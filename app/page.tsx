import Feature from "../components/home/Feature";
import GetStarted from "../components/home/GetStarted";
import HomeFAQ from "../components/home/HomeFAQ";
import PartnerHome from "../components/home/PartnerHome";
import WhyShama from "../components/home/WhyShama";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="maxContainer  overflow-hidden  text-white">
      <section className="sections relative overflow-hidden pt-[100px] lg:pt-[150px] pb-8 lg:pb-11 bg-[#0C0B15]">
        <div className="w-[400px] h-[200px] z-20 blur-[40px] lg:rotate-45 bg-gradient-to-r from-[#483FB2]/80 from-0% opacity-70 to-[#483FB2]/70 to-100%  absolute -right-36 -top-28 md:top-10"></div>
        <div className="flex gap-4 z-40  lg:gap-[140px] flex-col lg:flex-row">
          <div className="w-full lg:w-7/12 px-4 lg:px-0">
            <div className="flex flex-col justify-between text-white">
              <h2 className="text-[32px] leading-[42px] lg:text-[70px] lg:leading-[80px] font-bold">
                <span className="bg-gradient-to-r from-[#868074]/60 from-40% to-[#483FB2]/100 text-transparent bg-clip-text">
                  Experience
                </span>{" "}
                Kingdom Content Anytime,{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Anywhere</span>
                  <span className="absolute z-0 bg-gradient-to-r from-[#483FB2]/40 opacity-20 from-30% to-[#F4F7CA] to-80% rounded-[50%] w-[180px] h-[35px] lg:w-[350px] lg:h-[80px] top-1 lg:top-2 left-2"></span>
                </span>
              </h2>
              <div className="mt-6 lg:mt-[30px] mb-8 lg:mb-[20px]">
                <p className="leading-[22px] bg-gradient-to-r  md:leading-10 text-[15px] md:text-[28px] lg:textDefault w-full lg:w-3/4  from-white from-0% to-[#483FB2] to-100% text-transparent bg-clip-text">
                  Stream and download Godly content, connect with the community,
                  and grow in faith.
                </p>
              </div>

              <div className="flex relative flex-col xl:flex-row gap-4 lg:gap-3">
                <div className="w-[200px] z-20 lg:w-[300px] rotate-180 blur-[100px] h-[200px] lg:h-[200px]  translate-x-8  bg-gradient-to-r opacity-80 from-white/80 from-0% to-[#483FB2]/40 to-100%  absolute left-5 lg:left-34 -top-10 "></div>
                <button
                  type="button"
                  className="flex items-center z-30 justify-center w-full lg:w-auto gap-3 py-4 lg:py-3 px-6 lg:px-8 bg-gradient-to-r from-[#999999]/3 from-40%  to-[#483FB2]/40 to-80% opacity-80 rounded-[10px]"
                >
                  <Image
                    src="/icons/playstoreIcon.png"
                    alt="Playstore"
                    width={40}
                    height={40}
                    priority
                    className="w-[28px] h-[28px] lg:w-[40px] lg:h-[54px]"
                  />
                  <p className="text-[15px] text-center lg:text-[20px] leading-5 lg:leading-7">
                    <span>Coming Soon</span> <br />
                    <span className="font-bold">Google play</span>
                  </p>
                </button>
                <button
                  type="button"
                  className="flex items-center z-30 justify-center w-full lg:w-auto gap-3 py-4 lg:py-3 px-6 lg:px-8 bg-gradient-to-r from-[#999999]/3 from-40%  to-[#483FB2]/40 to-80% opacity-80  rounded-[10px]"
                >
                  <Image
                    src="/icons/appleIcon.png"
                    alt="App Store"
                    width={40}
                    height={40}
                    priority
                    className="w-[28px] h-[28px] lg:w-[54px] lg:h-[54px]"
                  />
                  <p className="text-[15px] lg:text-[20px] leading-5 lg:leading-7">
                    Coming Soon <br />
                    <span className="font-bold">App Store</span>
                  </p>
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start gap-12 text-white mt-10 lg:mt-24">
              <div className="text-center">
                <h5 className="text-3xl lg:text-[48px] leading-9 font-bold">
                  10,000 <span className="text-[#483FB2]">+</span>
                </h5>
                <p className="mt-3 lg:mt-5 text-[15px] lg:textDefault">
                  Content
                </p>
              </div>
              <div className="text-center">
                <h5 className="text-3xl lg:text-[48px] leading-9 font-bold">
                  500 <span className="text-[#483FB2]">+</span>
                </h5>
                <p className="mt-3 lg:mt-5 text-[15px] lg:textDefault">
                  Preachers/artists
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:block mt-8 lg:mt-0">
            <Image
              src="/images/iphoneHeroImg.png"
              alt="Playstore"
              width={332}
              height={679}
              priority
              className="w-[240px] lg:w-[332px] h-auto"
              sizes="(max-width: 768px) 240px, 332px"
            />
          </div>
        </div>
        <div className=" w-[200px]  lg:w-[400px] h-[200px] blur-[40px]  rotate-45 bg-gradient-to-r from-[#483FB2]/80 from-% to-[#483FB2]/50 to-100%  opacity-60 absolute   bottom-10 -left-40 lg:-left-[240px] "></div>
      </section>
      <div className="z-50">
        <Feature />
      </div>
      <WhyShama />
      <HomeFAQ />

      <div className="sections mt-20">
        <GetStarted />
      </div>
      <PartnerHome />
      {/* <Footer /> */}
    </main>
  );
};

export default page;
