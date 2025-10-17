import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "@/components/auth/auth";
import VerifyEmail from "./components/auth/verifyemail";
import ResetPassword from "./components/auth/resetpassword";
import ForgotPassword from "./components/auth/forgotpassowrd";
import NewPassword from "./components/auth/newpassword";

// ✅ Add these:
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* ✅ Add this line for react-toastify */}
      <ToastContainer position="top-right" autoClose={3000} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/auth/verifyemail" element={<VerifyEmail />} />
          <Route path="/auth/forgotpassword" element={<ForgotPassword />} />
          <Route path="/auth/resetpassword" element={<ResetPassword />} />
          <Route path="/auth/newpassword" element={<NewPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
