// import { useForm } from "react-hook-form";

import PartnerForm from "../forms/PartnerForm";

const PartnerHome = () => {
  return (
    <section className="sections py-[50px] md:py-24">
      <div className="md:w-[90%] mx-auto">
        <div className="text-center">
          <h3 className="header3 text-black">Partner with Us</h3>
          <p className="text-xl font-medium text-black py-7">
            Lets collaborate to spread the message of the Kingdom.
          </p>
        </div>

        <PartnerForm />
      </div>
    </section>
  );
};

export default PartnerHome;
