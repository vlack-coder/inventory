import React from "react";
import { Outlet, useParams } from "react-router";

function ResLayout() {
  
  return (
    <>
      {/* <div>ResLayout</div> */}
      <Outlet />
    </>
  );
}

export default ResLayout;
