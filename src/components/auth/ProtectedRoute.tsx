import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null); // null = loading

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(
          "https://zala-q5yw.onrender.com/api/auth/me",
          {
            withCredentials: true,
          }
        );
        if (res.data.user) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      } catch (err) {
        setIsAuth(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuth === null) return <div>Loading...</div>; // Optional: spinner

  return isAuth ? <>{children}</> : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
