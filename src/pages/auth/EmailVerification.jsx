import React, { useState } from "react";
import icon from "../../assets/icon.png";
export default function EmailVerification({ navigateTo }) {
  const [code, setCode] = useState(["", "", "", ""]); // State to hold the 4-digit code

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Only allow numeric input
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Automatically focus the next input if a digit is entered
    if (value && index < 3) {
      const nextInput = document.getElementById(`code-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleSubmit = () => {
    if (code.every((digit) => digit !== "")) {
      // Validate that all inputs are filled
      console.log("Verification code:", code.join("")); // Log the code
      navigateTo(); // Move to the next step
    } else {
      alert("Please fill all the fields"); // Show an error if not all fields are filled
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <img src={icon} alt="Oba Logo" className="w-16 h-16 mb-4" />
      <h1 className="text-lg font-semibold mb-2">Verify your email address</h1>
      <p className="text-center text-sm text-gray-700 mb-5">
        We have sent a verification code to
        <span className="font-medium"> nwabuezenwabueze2@gmail.com</span>
      </p>

      {/* Verification code inputs */}
      <div className="flex gap-8 mb-5">
        {code.map((digit, index) => (
          <input
            key={index}
            id={`code-input-${index}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        ))}
      </div>

      {/* Continue button */}
      <button
        onClick={handleSubmit}
        className="bg-[#8f9b74] text-white py-2 px-8 rounded-lg hover:bg-green-500 transition w-full"
      >
        Continue
      </button>

      {/* Resend code message */}
      <p className="text-sm text-gray-600 mt-5 text-center">
        Didn’t receive the verification code? It could take a bit of time,
        request a new code in{" "}
        <span className="font-medium text-gray-800">60 seconds</span>
      </p>

      {/* Support message */}
      <p className="text-xs text-gray-500 mt-20 text-center">
        For further support, you may visit the Help Center or contact our
        customer service team.
      </p>
    </div>
  );
}
