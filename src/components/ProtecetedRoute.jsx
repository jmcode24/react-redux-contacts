import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";


const ProtectedRoute = ({children, contact}) => {
 if (!contact) return <Navigate to="/login" replace={true} />

  return children;
};

const mapStateToProps = (state) => {
  return { contact: state.auth.contact};
};

export default connect(mapStateToProps)(ProtectedRoute);