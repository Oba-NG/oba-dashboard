import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import icon from "../../assets/icon.png";
export default function LoginScreen({ navigateTo }) {
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
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

      {/* Password Field */}
      <div className="relative w-full mb-6">
        <input
          type={passwordVisible ? "text" : "password"}
          placeholder="Password"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none"
        />
        {/* Toggle Password Visibility Icon */}
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-4 top-3 text-gray-500 hover:text-black"
        >
          {passwordVisible ? (
            <Eye className="w-5 h-5" />
          ) : (
            <EyeOff className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Continue Button */}
      <button
        onClick={navigateTo}
        className="w-full bg-[#A6C48A] text-white py-3 rounded-lg font-semibold hover:bg-green-500 transition"
      >
        Continue
      </button>

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
