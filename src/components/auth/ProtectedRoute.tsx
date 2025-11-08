import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import API from "@/lib/api"; // ✅ use your configured axios instance

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await API.get("/auth/me"); // ✅ baseURL handles full path

        if (res.data?.user) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      } catch (err) {
        console.warn("❌ Auth check failed:", err);
        setIsAuth(false);
      }
    };

    checkAuth();
  }, []);

  // Optional: loading spinner / screen
  if (isAuth === null) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-semibold">
        Checking authentication...
      </div>
    );
  }

  // Redirect unauthenticated users
  if (!isAuth) {
    return <Navigate to="/auth" replace />;
  }

  // Render protected children
  return <>{children}</>;
};

export default ProtectedRoute;
