import React from "react";
import { Route, Navigate,Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
const PrivateRoutes = ({
  auth: { isAuthenticated, loading },
}) => (
  !isAuthenticated && !loading ? <Navigate to='/login'/> :  <Outlet/>
);

PrivateRoutes.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
})
  

export default connect(mapStateToProps)(PrivateRoutes);
