import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, User } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import API from "@/lib/api"; // ✅ Use your configured Axios instance

export function UserButton() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  const [user, setUser] = useState({
    name: "",
    avatar: "",
  });

  // ✅ Fetch user info
  useEffect(() => {
    const getUser = async () => {
      try {
        // ✅ Use correct endpoint
        const res = await API.get("/auth/user/profile");

        if (res.data?.profile) {
          setUser({
            name: res.data.profile.username,
            avatar:
              res.data.profile.profileImageURL || "/placeholder-avatar.png",
          });
        }
      } catch (err) {
        console.error("❌ Failed to fetch user:", err);
        toast({ title: "Please log in to access your profile" });
      }
    };

    getUser();

    // ✅ Close menu on outside click
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // ✅ Handle Logout
  const handleLogout = async () => {
    try {
      await API.post("/logout"); // same base URL
      toast({ title: "Logout successful" });
      navigate("/auth");
    } catch (error) {
      toast({ title: "Logout failed", variant: "destructive" });
    }
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* Profile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full border border-zinc-300 bg-zinc-200 flex items-center justify-center overflow-hidden cursor-pointer hover:border-yellow-600 hover:ring-2 hover:ring-yellow-300 transition-all duration-200 shadow-sm"
        title="User Menu"
      >
        {user.avatar ? (
          <img
            src={user.avatar}
            alt="User Avatar"
            onError={(e) => {
              e.currentTarget.src = "/placeholder-avatar.png";
            }}
            className="rounded-full w-full h-full object-cover"
          />
        ) : (
          <User className="text-zinc-700 w-5 h-5" />
        )}
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white border border-zinc-200 rounded-xl shadow-xl z-20 transform scale-100 animate-dropdown">
          <div className="px-4 py-3 border-b border-zinc-200">
            <p className="font-semibold text-zinc-800">
              {user.name || "Guest"}
            </p>
            <p className="text-sm text-zinc-500">Bibliophile</p>
          </div>

          <button
            onClick={() => {
              setOpen(false);
              navigate("/user/profile");
            }}
            className="flex items-center gap-3 w-full text-left px-4 py-2 hover:bg-yellow-600 hover:text-white text-zinc-700 cursor-pointer transition-colors duration-200"
          >
            <User size={18} /> View Profile
          </button>

          <button
            onClick={() => {
              setOpen(false);
              handleLogout();
            }}
            className="flex items-center gap-3 w-full text-left px-4 py-2 hover:bg-red-100 text-red-600 cursor-pointer transition-colors duration-200"
          >
            <LogOut size={18} /> Sign Out
          </button>
        </div>
      )}

      {/* Animation */}
      <style>{`
        @keyframes dropdown {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-dropdown {
          animation: dropdown 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
