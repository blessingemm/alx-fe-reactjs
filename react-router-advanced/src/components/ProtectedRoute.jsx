import { Navigate } from "react-router-dom";

function useAuth() {
  const user = { loggedIn: false };
  return user && user.loggedIn;
}

function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth(); 

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
