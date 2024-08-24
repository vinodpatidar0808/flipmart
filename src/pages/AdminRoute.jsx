import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
const AdminRoute = () => {
  const { user } = useContext(AuthContext);
  const isAuthenticated = Object.keys(user ?? {}).length > 0 && user.isAdmin;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
export default AdminRoute;
