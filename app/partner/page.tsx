// import PartnerForm from "@/components/forms/PartnerForm";
// import Donation from "@/components/partner/Donation";
// import PartnerType from "@/components/partner/PartnerType";
import Link from "next/link";
import PartnerType from "../../components/partner/PartnerType";
import Donation from "../../components/partner/Donation";
import PartnerForm from "../../components/forms/PartnerForm";

const page = () => {
  return (
    <main className="pt-[80px]">
      <section
        className="relative text-white object-fill bg-center  md:object-center  md:object-cover  bg-no-repeat h-[400px] "
        style={{ backgroundImage: "url('/images/partnerHeroBg.png')" }}
      >
        {/* Background Overlay */}
        <div className="absolute right-0 top-[20%] bg-[#483FB2] z-30 blur-[100px]  lg:blur-[80px]  h-[250px] w-[250px] "></div>

        <div className="absolute inset-0 bg-[#191830B0]/70"></div>

        {/* Content */}
        <div className="relative z-40 flex flex-col items-start text-left pt-10 px-4 sm:px-8 lg:px-16 lg:max-w-[56%]  h-full">
          <h2 className="text-4xl md:text-[55px] lg:leading-[70px] font-bold ">
            Join Us in Spreading the Kingdom Message
          </h2>

          <div className="flex max-md:flex-col gap-2 mt-6 text-sm md:text-sm ">
            <p className="px-4 py-2 bg-gradient-to-r from-black/0 to-[#483FB2E0]/35 rounded-md">
              Help spread the message of the Kingdom
            </p>
            <p className="px-4 py-2 bg-gradient-to-r from-black/10 to-[#483FB2E0]/35 rounded-md">
              Build a stronger Christian community
            </p>
          </div>

          <Link href="/partner">
            <button className="mt-10 bg-[#483FB2] text-white text-lg md:text-xl font-bold py-3 px-8 md:py-4 md:px-12 rounded-lg">
              Partner with us
            </button>
          </Link>
        </div>
      </section>
      <PartnerType />
      <Donation />
      <section className="sections py-16">
        <PartnerForm />
      </section>
    </main>
  );
};

export default page;
