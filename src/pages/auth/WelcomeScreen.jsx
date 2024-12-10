import React from "react";
import { useForm } from "react-hook-form";
import icon from "../../assets/icon.png";
import googlesvg from "../../../public/google.svg";
import facebook from "../../../public/facebook.svg";
function WelcomeScreen({ navigateTo }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    navigateTo("EmailVerification"); // Navigate to the next screen
  };

  return (
    <div className="flex flex-col items-center md:w-2/4 h-screen px-2 py-8">
      {/* Top Logo */}
      <div className="flex flex-col items-center mt-10">
        <img src={icon} alt="Oba Logo" className="w-16 h-16 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800">Welcome to Oba</h1>
        <p className="text-sm text-center text-gray-600 mt-2 ">
          Type your email to log in or create an Oba account
        </p>
      </div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-4 my-10"
      >
        <input
          {...register("email")}
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
        />
        <button
          type="submit"
          className="w-full py-3 text-white bg-[#8f9b74] rounded-md hover:bg-green-500 text-sm"
        >
          Continue
        </button>
      </form>

      {/* Footer Section */}
      <div className="text-center">
        <p className="text-sm text-gray-500 mt-4">
          By continuing, you agree to Oba{" "}
          <span className="text-green-500 underline cursor-pointer">
            terms and Conditions
          </span>
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <button className="flex items-center justify-center w-12 h-12  rounded-full text-white">
            <img
              className="w-3/4"
              src={facebook}
              alt="facebook icon for login"
            />
          </button>
          <button className="flex items-center justify-center w-12 h-12 rounded-full text-white">
            <img
              className="w-3/5"
              src={googlesvg}
              alt="google icon for login"
            />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          For further support, you may visit the Help Center or contact our
          customer service team.
        </p>
      </div>
    </div>
  );
}

export default WelcomeScreen;
