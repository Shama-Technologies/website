import { Defines } from "../../lib/data";
import Image from "next/image";
import React from "react";

const VisionMission = () => {
  return (
    <section className="">
      <div className="text-center text-black sections py-[50px] md:py-[100px]">
        <div className="w-full md:w-10/12 mx-auto">
          <h3 className="header3">Vision Statement</h3>
          <p className="para1 mt-[30px] mb-[60px] md:px-5">
            To be the leading digital platform that empowers Christians
            worldwide to grow in faith, knowledge, and community through
            seamless access to high-quality godly contents.
          </p>
        </div>

        <div className="w-full md:w-10/12 mx-auto">
          <h3 className="header3">Mission Statement</h3>
          <p className="para1 mt-[30px]">
            Our mission is to create a centralized digital space where
            Christians can easily stream, download, and engage with diverse
            Christian content. We aim to inspire spiritual growth, foster
            community connections, and provide enriching resources that support
            and enhance the Christian journey.
          </p>
        </div>
      </div>

      <div className="text-center bg-[#EFF3FE] sections py-[50px] md:py-[100px]">
        <div className="w-full md:w-10/12 mx-auto">
          <h3 className="header3">What defines us</h3>
          <p className="para1 mt-[30px] mb-[60px]">
            Our values define the Shama culture, who we are, and what we do
            every day. They are the foundation of our identity and the compass
            of our interaction with the diverse streams of the body of Christ.
          </p>
        </div>

        <div className="flex max-md:flex-col gap-8 md:gap-14 md:flex-wrap lg:grid lg:grid-cols-5">
          {Defines.map((define) => {
            return (
              <div key={define.title} className="text-center w-fit mx-auto">
                <div className="max-md:w-[150px]">
                  <Image
                    src={define.img}
                    alt={define.title}
                    width={200}
                    height={200}
                  />
                </div>
                <p className="text-center para1 mt-4">{define.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
