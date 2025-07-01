import { useForm } from "react-hook-form";
import icon from "@/assets/icon.png";

export default function CreateAccountStep2({ navigateTo }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Personal Details:", data);
    navigateTo("NextStep");
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

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        {/* Email Field */}
        <div className="relative w-full mb-6">
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-hidden"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Surname Field */}
        <div className="relative w-full mb-6">
          <input
            {...register("surname", { required: "Surname is required" })}
            type="text"
            placeholder="Surname"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-hidden"
          />
          {errors.surname && (
            <p className="text-red-500 text-xs mt-1">
              {errors.surname.message}
            </p>
          )}
        </div>

        {/* Gender Selection */}
        <div className="relative w-full mb-6 text-gray-500">
          <select
            {...register("gender", { required: "Gender is required" })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-green-500 bg-white"
          >
            <option value="" disabled>
              Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>
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

      {/* Support Info */}
      <p className="text-xs text-gray-500 mt-8">
        For further support, you may visit the Help Center or contact our
        customer service team.
      </p>
    </div>
  );
}
