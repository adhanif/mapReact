import React from "react";

export default function Navbar({ ipData }) {
  return (
    <>
      {ipData && (
        <div className="bg-dark text-white text-center">
          <p className="small mb-0">
            Your IP: {ipData.ip} - ISP: {ipData.organization}{" "}
          </p>
        </div>
      )}
    </>
  );
}
