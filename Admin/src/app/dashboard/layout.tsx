
import React from "react";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      {children}
      {/* <div className="flex flex-col h-screen"> */}
      {/* <Header /> */}
      {/* <main className="dashboard-content">{children}</main> */}
      {/* <Footer /> */}
      {/* </div> */}
    </>
  );
};

export default DashboardLayout;
