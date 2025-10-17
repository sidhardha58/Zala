import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import API from "../../lib/api"; // Adjust path to your axios instance

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  // Extract token and email hash from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlToken = params.get("token");
    const emailParam = params.get("id");

    if (urlToken) setToken(urlToken);
    if (emailParam) setEmail(emailParam);

    if (!urlToken || !emailParam) {
      setError(true);
      setLoading(false);
    }
  }, [location.search]);

  // Send reset verification request
  useEffect(() => {
    const resetUser = async () => {
      try {
        const res = await API.post("/auth/resetpassword", { token });
        console.log(res.data);
        setVerified(true);
        setError(false);
        toast.success("Email verified successfully!");
      } catch (err) {
        console.error("Error verifying email:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (token) resetUser();
  }, [token]);

  const onResetPassword = () => {
    navigate(`/auth/newpassword?email=${encodeURIComponent(email)}`);
  };

  const onRetry = () => {
    setError(false);
    setLoading(true);
    setToken("");
    window.location.reload(); // Refresh page to try again
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <Toaster position="top-center" reverseOrder={false} />
      {loading ? (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
          <h1 className="text-3xl font-semibold text-blue-600 mb-4">
            Verifying...
          </h1>
          <div className="w-12 h-12 mx-auto rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin"></div>
          <p className="mt-4 text-gray-500">
            Please wait while we verify your link.
          </p>
        </div>
      ) : verified ? (
        <div className="bg-green-50 p-8 rounded-lg shadow-lg max-w-md text-center transition duration-300">
          <h1 className="text-3xl font-semibold text-green-600">
            Email Verified!
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Your email has been successfully verified.
          </p>
          <button
            className="mt-6 bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300 cursor-pointer"
            onClick={onResetPassword}
          >
            Reset Password
          </button>
        </div>
      ) : error ? (
        <div className="bg-red-50 p-8 rounded-lg shadow-lg max-w-md text-center transition duration-300">
          <h1 className="text-3xl font-semibold text-red-600">
            Oops, Something went wrong!
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Please check the link or try again later.
          </p>
          <button
            className="mt-6 bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300 cursor-pointer"
            onClick={onRetry}
          >
            Retry
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ResetPassword;
