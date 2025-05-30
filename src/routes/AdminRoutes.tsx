
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminLayout from '@/components/layout/AdminLayout';
import AdminLogin from '@/pages/admin/Login';
import Dashboard from '@/pages/admin/Dashboard';
import Games from '@/pages/admin/Games';
import CreateGame from '@/pages/admin/CreateGame';
import EditGame from '@/pages/admin/EditGame';
import Users from '@/pages/admin/Users';
import QuestionManagement from '@/pages/admin/QuestionManagement';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="games" element={<Games />} />
        <Route path="games/create" element={<CreateGame />} />
        <Route path="games/edit/:id" element={<EditGame />} />
        <Route path="users" element={<Users />} />
        <Route path="games/:gameSlug/questions" element={<QuestionManagement />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
