import React, { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";
import API from "../../lib/api"; // axios instance (baseURL = http://localhost:5000/api)

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(0);

  // Countdown for resend timer
  useEffect(() => {
    const interval =
      timer > 0 ? setTimeout(() => setTimer(timer - 1), 1000) : null;
    return () => clearTimeout(interval!);
  }, [timer]);

  const onResetPassword = async () => {
    toast.dismiss();
    setMessage("");
    setErrorMessage("");

    if (!email.trim()) {
      toast.error("Please enter your email.");
      return;
    }

    if (loading || timer > 0) return;

    setLoading(true);
    try {
      const res = await API.post("/auth/forgotpassword", { email });
      console.log(res.data);
      setMessage("Email sent to reset password");
      toast.success("Reset email sent!");
      setTimer(30); // cooldown before resend
    } catch (err: any) {
      const errorMsg = err.response?.data?.error || "Something went wrong.";
      toast.error(errorMsg);
      setErrorMessage(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const isDisabled = !email.trim() || loading || timer > 0;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0077b6] to-[#023e8a] p-4 sm:p-6">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full max-w-sm sm:max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <h1 className="text-xl sm:text-2xl font-bold text-center text-[#023e8a] mb-3 sm:mb-4">
          Forgot Password
        </h1>
        <p className="text-sm sm:text-base text-gray-600 text-center mb-5 sm:mb-6">
          Enter your email to reset your password
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0077b6] focus:border-[#0077b6] text-gray-700 placeholder-gray-400 transition duration-200"
        />

        <button
          onClick={onResetPassword}
          disabled={isDisabled}
          className={`w-full py-2 sm:py-3 px-4 mt-5 font-semibold rounded-xl transition duration-300 ${
            isDisabled
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-[#0077b6] text-white hover:bg-[#005f8e] cursor-pointer"
          }`}
        >
          {loading
            ? "Sending..."
            : timer > 0
            ? `Resend in ${timer}s`
            : "Reset Password"}
        </button>

        {message && (
          <p className="mt-4 text-sm text-green-600 text-center">{message}</p>
        )}
        {errorMessage && (
          <p className="mt-4 text-sm text-red-600 text-center">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
