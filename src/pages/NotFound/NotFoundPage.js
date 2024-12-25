import React from "react";
import { Link } from "react-router-dom";

import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <>
      <div className="h-[100svh] bg-mesh-noise bg-no-repeat bg-cover overflow-hidden overflow-y-scroll lg:overflow-auto">
        <p style={{ color: "white" }}>Oops! Where did you land?</p>
        <Link to="/">Home</Link>
      </div>
    </>
  );
}

export default NotFoundPage;
