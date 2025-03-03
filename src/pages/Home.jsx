import React, { useState } from "react";
import WelcomeScreen from "@/pages/auth/WelcomeScreen";
import EmailVerification from "@/pages/auth/EmailVerification";
import LoginScreen from "@/pages/auth/LoginScreen";
import CreateAccountStep1 from "@/pages/auth/CreateAccountStep1";
import CreateAccountStep2 from "@/pages/auth/CreateAccountStep2";

export default function Home() {
  const [currentStep, setCurrentStep] = useState("WelcomeScreen"); // Tracks the current step

  // Function to handle navigation between steps
  const handleNavigate = (step) => {
    setCurrentStep(step);
  };

  return (
    <main className="p-5 max-w-[1200px] mx-auto font-Monts md:flex md:justify-center">
      {/* Render screens based on the currentStep */}
      {currentStep === "WelcomeScreen" && (
        <WelcomeScreen navigateTo={() => handleNavigate("EmailVerification")} />
      )}

      {currentStep === "EmailVerification" && (
        <EmailVerification navigateTo={() => handleNavigate("LoginScreen")} />
      )}

      {currentStep === "LoginScreen" && (
        <LoginScreen navigateTo={() => handleNavigate("CreateAccountStep1")} />
      )}

      {currentStep === "CreateAccountStep1" && (
        <CreateAccountStep1
          navigateTo={() => handleNavigate("CreateAccountStep2")}
        />
      )}

      {currentStep === "CreateAccountStep2" && <CreateAccountStep2 />}
    </main>
  );
}
