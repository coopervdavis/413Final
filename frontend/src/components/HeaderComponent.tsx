import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderComponent: React.FC = () => {
  const navigate = useNavigate();
// lovely header
  return (
    <header className="bg-dark text-white py-3 shadow-sm fixed-top">
      <div className="container d-flex justify-content-between align-items-center">
        <h4 className="mb-0">EntertainmentAgency</h4>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-light" onClick={() => navigate("/home")}>
            Home
          </button>
          <button className="btn btn-outline-light" onClick={() => navigate("/list")}>
            Entertainer List
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
