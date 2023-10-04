import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../Context/AuthProvider';
import Loading from '../SharedPage/Loading/Loading';

const AdminRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, adminLoading] = useAdmin(user?.email);
  const location = useLocation();
  if (loading || adminLoading) {
    return <Loading></Loading>;
  }

  if (user?.email && isAdmin === "admin") {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;