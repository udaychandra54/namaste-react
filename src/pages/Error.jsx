import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  console.log("err", error.error.message);
  return (
    <div style={{ textAlign: "center", marginTop: "15px" }}>
      {error?.status} : {error?.error?.message}
    </div>
  );
};

export default Error;
