import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiLogOut,
  FiCamera,
  FiEdit2,
  FiCheck,
  FiClock,
  FiAward,
  FiHeart,
  FiTrendingUp,
  FiBookOpen,
  FiCalendar,
  FiStar,
  FiGift,
} from "react-icons/fi";

import API from "@/lib/api";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/home/Navigation";

type User = {
  username: string;
  email: string;
  profileImageURL?: string;
  bio?: string;
  createdAt: string;

  storiesCompleted?: number;
  vrHours?: number;
  favoriteGenre?: string;
  lastStory?: string;
  currentStoryProgress?: number;
  favoriteBook?: string;
  achievementCount?: number;
  vouchers?: number;
};

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [newBio, setNewBio] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get("/auth/user/profile");
        setUser(res.data.profile);
        setNewBio(res.data.profile.bio || "");
      } catch (error) {
        toast({ title: "Failed to load profile", variant: "destructive" });
      }
    };
    fetchProfile();
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("profileImage", file);

      // Assuming your backend expects profile image upload at this endpoint
      const res = await API.post("/auth/user/uploadProfileImage", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setUser((prev) =>
        prev ? { ...prev, profileImageURL: res.data.profileImageURL } : prev
      );
      setImagePreview(null);
      toast({ title: "Profile image updated!" });
    } catch (error) {
      toast({ title: "Failed to upload image", variant: "destructive" });
    } finally {
      setUploading(false);
    }
  };

  const handleBioChange = async () => {
    if (isEditingBio) {
      try {
        const res = await API.put("/auth/user/updateBio", { bio: newBio });
        setUser((prev) => (prev ? { ...prev, bio: newBio } : prev));
        toast({ title: "Bio updated!" });
      } catch (error) {
        toast({ title: "Failed to update bio", variant: "destructive" });
      }
    }
    setIsEditingBio(!isEditingBio);
  };

  const handleLogout = async () => {
    try {
      await API.post("/auth/logout"); // Your logout route
      toast({ title: "Logged out" });
      navigate("/auth");
    } catch {
      toast({ title: "Logout failed", variant: "destructive" });
    }
  };

  if (!user) return <div className="text-center mt-20">Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-white to-slate-100 dark:from-black dark:to-gray-900 min-h-screen pb-16">
        <main className="max-w-3xl mx-auto px-4 py-10 mt-10">
          {/* Avatar Section */}
          <section className="flex flex-col items-center mb-8">
            <div className="relative">
              <img
                src={
                  imagePreview ||
                  user.profileImageURL ||
                  "https://api.dicebear.com/7.x/lorelei/svg?seed=" +
                    user.username
                }
                alt="Profile"
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-yellow-600 object-cover shadow-lg"
              />
              <label
                htmlFor="imageUpload"
                className="absolute bottom-0 right-0"
              >
                <div className="bg-yellow-500 hover:bg-yellow-600 p-2 rounded-full cursor-pointer shadow transition">
                  <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      const reader = new FileReader();
                      reader.onloadend = () =>
                        setImagePreview(reader.result as string);
                      reader.readAsDataURL(file);
                      handleImageUpload(e);
                    }}
                    disabled={uploading}
                  />
                  {uploading ? "⏳" : <FiCamera className="text-white" />}
                </div>
              </label>
            </div>
            <h1 className="mt-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
              {user.username}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {user.email}
            </p>
          </section>

          {/* Bio Section */}
          <section className="bg-white dark:bg-zinc-800 text-black dark:text-white p-6 rounded-xl shadow mb-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">About Me</h2>
              <button
                onClick={handleBioChange}
                className="text-yellow-500 hover:text-yellow-600 flex items-center gap-1"
              >
                {isEditingBio ? (
                  <>
                    <FiCheck /> Save
                  </>
                ) : (
                  <>
                    <FiEdit2 /> Edit
                  </>
                )}
              </button>
            </div>
            {isEditingBio ? (
              <textarea
                value={newBio}
                onChange={(e) => setNewBio(e.target.value)}
                className="w-full p-3 rounded border-2 border-yellow-500 focus:outline-none"
                rows={4}
              />
            ) : (
              <p className="text-sm">{user.bio || "No bio added."}</p>
            )}
          </section>

          {/* Immersive Stats Section */}
          <section className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 cursor-pointer">
            {[
              {
                label: "Stories Completed",
                value: `${user.storiesCompleted ?? 0}`,
                icon: <FiBookOpen />,
              },
              {
                label: "VR Hours Experienced",
                value: `${user.vrHours ?? 0} hrs`,
                icon: <FiClock />,
              },
              {
                label: "Favorite Genre",
                value: user.favoriteGenre ?? "Unknown",
                icon: <FiStar />,
              },
              {
                label: "Last Story",
                value: user.lastStory ?? "None yet",
                icon: <FiCalendar />,
              },
              {
                label: "Last Story Progress",
                value: `${user.currentStoryProgress ?? 0}%`,
                icon: <FiTrendingUp />,
              },
              {
                label: "Favorite Book",
                value: user.favoriteBook ?? "N/A",
                icon: <FiHeart />,
              },
              {
                label: "Achievements",
                value: `${user.achievementCount ?? 0}`,
                icon: <FiAward />,
              },
              {
                label: "Vouchers Earned",
                value: `${user.vouchers ?? 0}`,
                icon: <FiGift />,
              },
              {
                label: "Member Since",
                value: new Date(user.createdAt).toLocaleDateString(),
                icon: <FiCalendar />,
              },
            ].map((stat, idx) => (
              <Card
                key={idx}
                className="bg-white dark:bg-zinc-900 p-4 rounded-xl flex flex-col items-center justify-center shadow hover:border-yellow-500 border border-transparent transition-all hover:scale-105"
              >
                <div className="text-yellow-500 text-xl mb-1">{stat.icon}</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {stat.label}
                </p>
                <p className="text-sm font-semibold text-gray-800 dark:text-white">
                  {stat.value}
                </p>
              </Card>
            ))}
          </section>

          {/* Action Buttons */}
          <section className="flex flex-col sm:flex-row justify-center sm:justify-between gap-4">
            <Button variant="outline" onClick={() => navigate("/explore")}>
              <FiBookOpen className="mr-2" />
              Explore Stories
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              <FiLogOut className="mr-2" />
              Logout
            </Button>
          </section>
        </main>
      </div>
    </>
  );
};

export default Profile;
