import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchEntertainerById,
  updateEntertainer,
  deleteEntertainer,
} from "../api/FinalAPI";
import { Entertainer } from "../types/Entertainer";
import EditEntertainerModal from "../components/EditEntertainerModal"; // <- modal wrapper

const EntertainerDetailsPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [entertainer, setEntertainer] = useState<Entertainer | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const loadEntertainer = async () => {
      if (!id) return;
      try {
        const data = await fetchEntertainerById(parseInt(id));
        setEntertainer(data);
      } catch (error) {
        console.error("Error fetching entertainer details:", error);
      }
    };

    loadEntertainer();
  }, [id]);

  const handleDelete = async () => {
    if (!id) return;
    const confirm = window.confirm("Are you sure you want to delete this entertainer?");
    if (!confirm) return;

    try {
      await deleteEntertainer(parseInt(id));
      navigate("/list");
    } catch (err) {
      console.error("Error deleting entertainer:", err);
      alert("Failed to delete entertainer.");
    }
  };

  const handleUpdate = async (formData: Partial<Entertainer>) => {
    if (!id) return;

    try {
      await updateEntertainer(parseInt(id), formData);
      setIsEditing(false);
      const updated = await fetchEntertainerById(parseInt(id));
      setEntertainer(updated);
    } catch (err) {
      console.error("Error updating entertainer:", err);
      alert("Failed to update entertainer.");
    }
  };

  if (!entertainer) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">{entertainer.entStageName}</h2>
      <div className="card">
        <div className="card-body">
          <p><strong>SSN:</strong> {entertainer.entSSN}</p>
          <p><strong>Address:</strong> {entertainer.entStreetAddress}, {entertainer.entCity}, {entertainer.entState} {entertainer.entZipCode}</p>
          <p><strong>Phone:</strong> {entertainer.entPhoneNumber}</p>
          <p><strong>Email:</strong> {entertainer.entEMailAddress}</p>
          <p><strong>Website:</strong> {entertainer.entWebPage}</p>
          <p><strong>Date Entered:</strong> {entertainer.dateEntered}</p>
  
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-secondary" onClick={() => navigate("/list")}>
              ← Back
            </button>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-primary" onClick={() => setIsEditing(true)}>
                Edit
              </button>
              <button className="btn btn-outline-danger" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
  
      {isEditing && entertainer && (
        // pop up for editing
        <EditEntertainerModal
          show={isEditing}
          onClose={() => setIsEditing(false)}
          onSubmit={handleUpdate}
          entertainer={entertainer}
        />
      )}
    </div>
  );
  
};

export default EntertainerDetailsPage;
