import React, { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location)
  if (loading) {
    <span className="loading loading-bars loading-3xl"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location?.pathname}></Navigate>;
}
