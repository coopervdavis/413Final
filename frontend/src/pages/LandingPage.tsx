import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    // wonderful landing page
    <div className="container text-center mt-5">
      <h1 className="mb-4">Welcome to the Entertainment Agency!</h1>
      <h3>Click this button to see our awesome entertainers!!!</h3>
      <button className="btn btn-primary" onClick={() => navigate("/list")}>
        Entertainers
      </button>
    </div>
  );
}

export default LandingPage;
