import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-[#08090D] text-white flex">
      <AdminSidebar />

      <main className="flex-1 ml-72 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;