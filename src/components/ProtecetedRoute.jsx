import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


const ProtectedRoute = ({children}) => {
  const contact = useSelector(state => state.auth.contact);
 if (!contact) return <Navigate to="/login" replace={true} />

  return children;
};

export default ProtectedRoute;