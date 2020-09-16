import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <div style={{ minHeight: "700px" }}>{children}</div>
    </div>
  );
};

export default AuthLayout;
