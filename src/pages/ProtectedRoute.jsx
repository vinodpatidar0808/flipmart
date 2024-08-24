import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
const ProtectedRoute = () => {
  const { user } = useContext(AuthContext);
  const isAuthenticated = Object.keys(user ?? {}).length > 0;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoute;
