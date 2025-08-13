// components/ContactForm.tsx
"use client";
import React from "react";
import { AxiosError } from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function PartnerForm() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ ...status, submitting: true });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Email sent successfully!");
        setStatus({
          submitting: false,
          submitted: true,
          success: true,
          message: data.message,
        });

        // Reset form on success
        setFormData({
          user_name: "",
          user_email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error(data.message || "Something went wrong");
        setStatus({
          submitting: false,
          submitted: true,
          success: false,
          message: data.message || "Something went wrong",
        });
      }
    } catch (error) {
      const err = error as AxiosError;
      toast.error("An error occurred. Please try again later.");
      setStatus({
        submitting: false,
        submitted: true,
        success: false,
        message: "An error occurred. Please try again later.",
      });
      console.error(err);
    }
  };

  return (
    <div className="  ">
      {/* {status.submitted && (
        <div
          className={`mb-4 p-3 rounded-md ${
            status.success
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status.message}
        </div>
      )} */}

      <form onSubmit={handlePartnerSubmit} className="w-full">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 items-start">
          <div className="mb-4">
            <label
              htmlFor="user_name"
              className="block text-sm font-medium text-black mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="user_email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How would you like to partner with us?"
            required
            rows={4}
            className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status.submitting}
          className="w-fit md:w-1/5 mx-auto text-center flex items-center justify-center bg-[#483FB2]  text-white py-4 px-4 rounded-md hover:bg-[#483FB2]/90 mt-7 md:mt-14 transition duration-150 ease-in-out"
        >
          {status.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

// "use client";

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import SuccessModal from "@/components/modal/SuccessModalProps";

// export interface IPartner {
//   name: string;
//   email: string;
//   phone: string;
//   messageText: string;
// }

// const PartnerForm = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<IPartner>();

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const partnerSubmit = async (data: IPartner) => {
//     try {
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();

//       if (result.success) {
//         setIsModalOpen(true);
//         reset();
//         setErrorMessage("");
//       } else {
//         setErrorMessage(result.message);
//       }
//     } catch (error: any) {
//       setErrorMessage("Something went wrong. Please try again later.");
//     }
//   };

//   return (
//     <section>
//       <div>
//         <form onSubmit={handleSubmit(partnerSubmit)} className="w-full">
//           <div className="grid md:grid-cols-2 gap-7">
//             {/* Name */}
//             <div className="grid gap-1">
//               <label htmlFor="name">Name</label>
//               <div className="inputGradient py-[1px] px-[1px]">
//                 <input
//                   type="text"
//                   {...register("name", { required: "Enter your full name" })}
//                   id="name"
//                   placeholder="John Doe"
//                   className="input"
//                 />
//               </div>
//               {errors.name && (
//                 <p className="text-red-500">{errors.name.message}</p>
//               )}
//             </div>

//             {/* Email */}
//             <div className="grid gap-1">
//               <label htmlFor="email">Email</label>
//               <div className="inputGradient py-[1px] px-[1px]">
//                 <input
//                   type="email"
//                   {...register("email", { required: "Enter your email" })}
//                   id="email"
//                   placeholder="john@example.com"
//                   className="input"
//                 />
//               </div>
//               {errors.email && (
//                 <p className="text-red-500">{errors.email.message}</p>
//               )}
//             </div>

//             {/* Phone */}
//             <div className="grid gap-1">
//               <label htmlFor="phone">Phone</label>
//               <div className="inputGradient py-[1px] px-[1px]">
//                 <input
//                   type="tel"
//                   {...register("phone", {
//                     required: "Enter your phone number",
//                   })}
//                   id="phone"
//                   placeholder="+1234567890"
//                   className="input"
//                 />
//               </div>
//               {errors.phone && (
//                 <p className="text-red-500">{errors.phone.message}</p>
//               )}
//             </div>

//             {/* Message */}
//             <div className="grid gap-1">
//               <label htmlFor="message">Message</label>
//               <div className="inputGradient py-[1px] px-[1px]">
//                 <textarea
//                   {...register("messageText", {
//                     required: "Enter your message",
//                   })}
//                   id="message"
//                   placeholder="How would you like to partner with us?"
//                   className="input"
//                   rows={4}
//                 />
//               </div>
//               {errors.messageText && (
//                 <p className="text-red-500">{errors.messageText.message}</p>
//               )}
//             </div>
//           </div>

//           {errorMessage && (
//             <p className="text-red-500 text-center mt-4">{errorMessage}</p>
//           )}

//           <button
//             type="submit"
//             className="py-[14px] px-[94px] text-base font-bold rounded-lg mt-14 flex w-fit mx-auto bg-[#483FB2] text-white"
//           >
//             Submit
//           </button>
//         </form>
//       </div>

//       {isModalOpen && (
//         <SuccessModal
//           message="Thank you! Your submission was successful."
//           onClose={() => setIsModalOpen(false)}
//         />
//       )}
//     </section>
//   );
// };

// export default PartnerForm;
