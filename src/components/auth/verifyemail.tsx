import React, { useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import API from "../../lib/api"; // adjust path as needed

const VerifyEmail = () => {
  const [token, setToken] = useState<string | null>(null);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  // Extract token from query string
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlToken = params.get("token");

    if (urlToken) {
      setToken(urlToken);
    } else {
      setError(true);
      setLoading(false);
    }
  }, [location.search]);

  // Call backend to verify
  const verifyUserEmail = useCallback(async () => {
    try {
      await API.post("/auth/verifyemail", { token });
      setVerified(true);
      toast.success("✅ Email verified successfully!");
    } catch (err) {
      console.error("❌ Verification failed:", err);
      setError(true);
      toast.error("Invalid or expired verification link.");
    } finally {
      setLoading(false);
    }
  }, [token]);

  // Auto-trigger verify when token is ready
  useEffect(() => {
    if (token) verifyUserEmail();
  }, [token, verifyUserEmail]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <Toaster position="top-center" />
      {loading ? (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold text-blue-600">Verifying...</h2>
          <div className="mt-4 w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto" />
          <p className="mt-2 text-gray-500">Please wait...</p>
        </div>
      ) : verified ? (
        <div className="bg-green-50 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold text-green-600">
            Email Verified!
          </h2>
          <p className="mt-2 text-gray-600">Your account is now active.</p>
          <button
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            onClick={() => navigate("/auth")}
          >
            Go to Login
          </button>
        </div>
      ) : error ? (
        <div className="bg-red-50 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold text-red-600">
            Verification Failed
          </h2>
          <p className="mt-2 text-gray-600">
            Invalid or expired verification link.
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default VerifyEmail;
