"use client";
import * as React from "react";
// import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { FaStarOfLife } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
// import { FaStar } from "react-icons/fa";
// import { POST } from "@/app/api/contact/route";

interface IAmbassador {
  name: string;
  phone: string;
  email: string;
  address: string;
  contribution: string;
  institution: string;
  picture: FileList | null;
  skill: string;
  fellowship: string;
}

interface ILabel {
  label: string;
}

export default function AmbassadorForm({ label }: ILabel) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const form = React.useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formStatus, setFormStatus] = React.useState<{
    type: "success" | "error" | null;
    message: string | null;
  }>({
    type: null,
    message: null,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAmbassador>();

  // const scriptURL =
  //   "https://script.google.com/macros/s/AKfycbz1fHRN1lEXXKQ1sg2IT30of3GJAJRPhEMcu6_GCgmpbPiIOt0u40nb0ibMtCkky9J2/exec";

  const sendEmail = async (data: IAmbassador) => {
    if (!form.current) return;

    setIsSubmitting(true);
    setFormStatus({ type: null, message: null });

    // Replace with your Google Apps Script Web App URL

    // const res = await fetch(scriptURL, {
    //   method: "POST",
    //   body: JSON.stringify(form),
    // });

    // if (res.ok) {
    // }

    // EMAILJS

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        form.current,
        {
          publicKey:
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
        }
      )
      .then(
        () => {
          setFormStatus({
            type: "success",
            message: "Your message has been sent successfully!",
          });
          reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setFormStatus({
            type: "error",
            message: "Failed to send message. Please try again later.",
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });

    // Replace with your Google Apps Script Web App URL
    console.log(data);
    const scriptURL = process.env.NEXT_PUBLIC_SPREADSHEET!;

    const res = await fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(
        Object.entries(data).map(([key, value]) => [key, String(value)])
      ).toString(),
    });

    alert("Form submitted successfully!");

    if (res.ok) {
      setIsSubmitting(false);
    }

    // setIsSubmitting(false);
  };

  return (
    <React.Fragment>
      {/* <Button variant="outlined">Open responsive dialog</Button> */}
      <button
        onClick={handleClickOpen}
        type="button"
        className="flex py-3 md:py-4 px-9 md:px-[50px] text-white font-bold text-xl rounded-lg  bg-[#483FB2] mt-10"
      >
        {label}
      </button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        className="w-[90%] mx-auto"
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          id="responsive-dialog-title"
          className="text-center font-semibold text-3xl"
        >
          Shama Ambassador&apos;s Program
        </DialogTitle>

        {formStatus.message && (
          <div
            className={`p-4 mb-6 rounded-md ${
              formStatus.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {formStatus.message}
          </div>
        )}

        <DialogContent className="">
          <form
            ref={form} // Add this line to connect your ref to the form
            action=""
            onSubmit={handleSubmit(sendEmail)}
            className="w-[90%] mx-auto"
          >
            <div className="grid md:grid-cols-2 items-center gap-7">
              <div className="grid gap-1">
                <label
                  htmlFor="name"
                  className="text-base relative font-medium text-black"
                >
                  Name
                  <FaStarOfLife
                    fontSize={10}
                    className="text-red-600 absolute right-0 top-1"
                  />
                </label>
                <div className="inputGradient py-[1px] px-[1px]">
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    className="input"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-600">Fill in your name</p>
                )}
              </div>
              <div className="grid gap-1">
                <label
                  htmlFor="email"
                  className="text-base relative font-medium text-black"
                >
                  Email{" "}
                  <FaStarOfLife
                    fontSize={10}
                    className="text-red-600 absolute -right-3 top-1"
                  />
                </label>
                <div className="inputGradient py-[1px] px-[1px]">
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="input"
                  />{" "}
                  <FaStarOfLife
                    fontSize={10}
                    className="text-red-600 absolute -right-3 top-1"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-600">Fill in your email</p>
                )}
              </div>
              <div className="grid relative gap-1">
                <label
                  htmlFor="phone"
                  className="text-base font-medium text-black"
                >
                  Phone{" "}
                  <FaStarOfLife
                    fontSize={10}
                    className="text-red-600 absolute -right-3 top-1"
                  />
                </label>
                <div className="inputGradient py-[1px] px-[1px]">
                  <input
                    {...register("phone", { required: true })}
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="input"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-600">Fill in your phone number</p>
                )}
              </div>
              <div className="grid relative gap-1">
                <label htmlFor="address">
                  Address{" "}
                  <FaStarOfLife
                    fontSize={10}
                    className="text-red-600 absolute -right-3 top-1"
                  />
                </label>
                <div className="inputGradient py-[1px] px-[1px]">
                  <input
                    {...register("address", { required: true })}
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter your address"
                    className="input"
                  />
                </div>
                {errors.address && (
                  <p className="text-red-600">Fill in your address</p>
                )}
              </div>
              <div className="grid gap-1">
                <label
                  htmlFor="institution"
                  className="text-base relative font-medium text-black"
                >
                  What is the name of your higher institution
                  <FaStarOfLife
                    fontSize={10}
                    className="text-red-600 absolute -right-3 top-1"
                  />
                </label>
                <div className="inputGradient py-[1px] px-[1px]">
                  <input
                    {...register("institution", { required: true })}
                    type="text"
                    name="institution"
                    id="institution"
                    placeholder="Enter the name of your institution"
                    className="input"
                  />
                </div>
                {errors.institution && (
                  <p className="text-red-600">Fill in your institution</p>
                )}
              </div>
              <div className="grid gap-1">
                <label
                  htmlFor="fellowship"
                  className="text-base relative font-medium text-black"
                >
                  University & fellowship you attend or Church/Ministry{" "}
                  <FaStarOfLife
                    fontSize={10}
                    className="text-red-600 absolute -right-3 top-1"
                  />
                </label>
                <div className="inputGradient py-[1px] px-[1px]">
                  <input
                    {...register("fellowship", { required: true })}
                    type="text"
                    name="fellowship"
                    id="fellowship"
                    placeholder="Enter the name of your Fellowship/Church/Ministry"
                    className="input"
                  />
                </div>
                {errors.fellowship && (
                  <p className="text-red-600">Fill in your fellowship</p>
                )}
              </div>
              <div className="grid gap-1">
                <label
                  htmlFor="contribution"
                  className="text-base relative font-medium text-black"
                >
                  How do you intend to contribute to Shama?{" "}
                  <FaStarOfLife
                    fontSize={10}
                    className="text-red-600 absolute -right-3 top-1"
                  />
                </label>
                <div className="inputGradient py-[1px] px-[1px]">
                  <input
                    {...register("contribution", { required: true })}
                    type="text"
                    name="contribution"
                    id="contribution"
                    placeholder="Enter contribution"
                    className="input"
                  />
                </div>
                {errors.contribution && (
                  <p className="text-red-600">Fill in your contribution</p>
                )}
              </div>
              <div className="grid gap-1">
                <label
                  htmlFor="skill"
                  className="text-base relative font-medium text-black"
                >
                  Do you have a digital skill ? If yes, kindly state.{" "}
                  <FaStarOfLife
                    fontSize={10}
                    className="text-red-600 absolute -right-3 top-1"
                  />
                </label>
                <div className="inputGradient py-[1px] px-[1px]">
                  <input
                    {...register("skill", { required: true })}
                    type="text"
                    name="skill"
                    id="skill"
                    placeholder="Enter your digital skill"
                    className="input"
                  />
                </div>
                {errors.skill && (
                  <p className="text-red-600">Fill in your skill</p>
                )}
              </div>
            </div>
            {/* <div className="grid gap-1 mt-8">
              <label htmlFor="picture">
                Upload a clear picture of yourself.(Professional)
              </label>
              <div className="inputGradient py-[1px] px-[1px]">
                <input
                  {...register("picture")}
                  type="file"
                  name="picture"
                  id="picture"
                  className="input"
                />
              </div>
            </div>
            {errors.picture && (
              <p className="text-red-600">Upload your picture</p>
            )} */}

            <DialogActions>
              <div className="max-md:grid w-fit mt-10 gap-5 mx-auto">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                <button
                  onClick={handleClose}
                  type="button"
                  disabled={isSubmitting}
                  className="py-[14px] px-[94px] text-base font-bold rounded-lg md:mt-5 flex text-[#483FB2] w-fit mx-auto bg-white border border-[#483FB2] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
              </div>
              {/* <Button autoFocus onClick={handleClose}>
                Disagree
              </Button>
              <Button onClick={handleClose} autoFocus>
                Agree
              </Button> */}
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
      {/* made changes */}
    </React.Fragment>
  );
}
