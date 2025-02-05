import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import icon from "../../assets/icon.png";
export default function CreateAccountStep2({ navigateTo }) {
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
        Personal details
      </h1>
      <p className="text-sm text-gray-600 mb-6">
        We just need you to fill some details
      </p>
      {/* Password Field input password*/}
      <div className="relative w-full mb-6">
        <input
          type={"email"}
          placeholder="Enter your email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none"
        />
      </div>
      <div className="relative w-full mb-6">
        <input
          type={name}
          placeholder="Surname"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none"
        />
      </div>
      {/* gender */}
      <div className="relative w-full mb-6 text-gray-500">
        <select
          id="gender"
          name="gender"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white "
        >
          <option value="" disabled selected>
            Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      {/* Continue Button */}
      <button
        onClick={navigateTo}
        className="w-full bg-[#A6C48A] text-white py-3 rounded-lg font-semibold hover:bg-green-500 transition"
      >
        Continue
      </button>

      {/* Forgot Password */}

      {/* Support Info */}
      <p className="text-xs text-gray-500 mt-8">
        For further support, you may visit the Help Center or contact our
        customer service team.
      </p>
    </div>
  );
}
