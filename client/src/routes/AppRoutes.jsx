import { Routes, Route } from "react-router-dom";

import Home from "../../features/home/pages/Home";

import Login from "../../features/auth/pages/Login";
import Register from "../../features/auth/pages/Register";

import Dashboard from "../../features/dashboard/pages/Dashboard";
import Profile from "../../features/profile/pages/Profile";
import Rooms from "../../features/rooms/pages/Rooms";

import Booking from "../../features/bookings/pages/Booking";
import MyBookings from "../../features/bookings/pages/MyBookings";

import AdminDashboard from "../../features/admin/pages/AdminDashboard";
import BookingManagement from "../../features/admin/pages/BookingManagement";
import CreateRoom from "../../features/admin/pages/CreateRoom";

import ProtectedRoute from "../../components/ProtectedRoute";
import AdminRoute from "../../components/AdminRoute";
import AdminLayout from "../../features/admin/components/AdminLayout";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Public */}

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      {/* User */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/rooms"
        element={
          <ProtectedRoute>
            <Rooms />
          </ProtectedRoute>
        }
      />

      <Route
        path="/booking/:id"
        element={
          <ProtectedRoute>
            <Booking />
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-bookings"
        element={
          <ProtectedRoute>
            <MyBookings />
          </ProtectedRoute>
        }
      />

      {/* Admin */}

       <Route
    path="/admin"
    element={
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    }
  >
    <Route index element={<AdminDashboard />} />

    <Route
      path="bookings"
      element={<BookingManagement />}
    />

    <Route
      path="create-room"
      element={<CreateRoom />}
    />
  </Route>

    </Routes>
  );
};

export default AppRoutes;