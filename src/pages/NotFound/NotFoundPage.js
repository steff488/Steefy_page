import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <>
      <p style={{ color: "white" }}>Oops! Where did you land?</p>
      <Link to="/">Home</Link>
    </>
  );
}

export default NotFoundPage;
