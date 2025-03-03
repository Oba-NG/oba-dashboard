import { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import icon from "@/assets/icon.png";

export default function EmailVerification({ navigateTo }) {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      code: ["", "", "", ""],
    },
  });

  const inputsRef = useRef([]);

  const onSubmit = (data) => {
    const verificationCode = data.code.join("");
    if (verificationCode.length === 4) {
      console.log("Verification code:", verificationCode);
      navigateTo("Dashboard");
    }
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      setValue(`code[${index}]`, value);
      if (value && index < inputsRef.current.length - 1) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("text").trim();
    if (/^\d{4}$/.test(pastedData)) {
      pastedData.split("").forEach((num, i) => setValue(`code[${i}]`, num));
      inputsRef.current[3].focus();
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center w-full"
      >
        <div className="flex gap-4 mb-5">
          {[0, 1, 2, 3].map((index) => (
            <Controller
              key={index}
              name={`code[${index}]`}
              control={control}
              rules={{
                required: "Required",
                pattern: { value: /^[0-9]$/, message: "Must be a number" },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  maxLength={1}
                  ref={(el) => (inputsRef.current[index] = el)}
                  onChange={(e) => handleChange(e, index)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              )}
            />
          ))}
        </div>
        {errors.code && (
          <p className="text-red-500 text-xs">{errors.code.message}</p>
        )}

        {/* Continue button */}
        <button
          type="submit"
          className="bg-[#8f9b74] text-white py-2 px-8 rounded-lg hover:bg-green-500 transition w-full"
        >
          Continue
        </button>
      </form>

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
