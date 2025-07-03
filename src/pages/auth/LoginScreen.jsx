import { useState } from "react";
import { useForm } from "react-hook-form";
import icon from "@/assets/icon.png";
import { EyeToggle } from "@/components/shared/buttons";

export default function LoginScreen({ navigateTo }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = () => {
    navigateTo("Dashboard"); // Navigate to the next screen after login
  };

  return (
    <div className="flex flex-col items-center md:w-2/4 h-screen px-2 py-8">
      {/* Logo */}
      <div className="flex justify-center mb-5">
        <img src={icon} alt="Oba Logo" className="w-16 h-16 mb-4" />
      </div>

      {/* Heading */}
      <h1 className="text-2xl font-semibold text-[#1C3812] mb-2">
        Welcome Back!
      </h1>
      <p className="text-sm text-gray-600 mb-6">
        Log back into your Oba account
      </p>

      {/* Email (display only) */}
      <div className="bg-[#F5F4F2] text-[#666666] rounded-md px-4 py-2 mb-4 flex w-full justify-between items-center">
        <span>nwabuezenwabueze2@gmail.com</span>
        <button className="text-[#1C3812] text-sm font-semibold hover:underline">
          Edit
        </button>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        {/* Password Field */}
        <div className="relative w-full mb-4">
          <input
            {...register("password", { required: "Password is required" })}
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-hidden"
          />
          <EyeToggle
            isVisible={passwordVisible}
            onClick={togglePasswordVisibility}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Continue Button */}
        <button
          type="submit"
          className="w-full bg-[#A6C48A] text-white py-3 rounded-lg font-semibold hover:bg-green-500 transition"
        >
          Continue
        </button>
      </form>

      {/* Forgot Password */}
      <p className="text-sm text-[#1C3812] mt-4 hover:underline cursor-pointer">
        Forgot your password?
      </p>

      {/* Support Info */}
      <p className="text-xs text-gray-500 mt-8">
        For further support, you may visit the Help Center or contact our
        customer service team.
      </p>
    </div>
  );
}
