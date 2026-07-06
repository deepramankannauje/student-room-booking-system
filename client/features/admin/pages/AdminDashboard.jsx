import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import AdminSidebar from "../components/AdminSidebar";
import DashboardCards from "../components/DashboardCards";

import { getDashboard } from "../services/adminService";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDashboard = async () => {
    try {
      setLoading(true);

      const response = await getDashboard();

      setStats(response.stats);
    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.message ||
          "Failed to load dashboard."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <div className="min-h-screen bg-[#08090D] text-white">
      <div className="flex">
        <AdminSidebar />

        <main className="flex-1 p-8">
          <h1 className="mb-8 text-3xl font-bold">
            Admin Dashboard
          </h1>

          <DashboardCards
            stats={stats}
            loading={loading}
          />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;