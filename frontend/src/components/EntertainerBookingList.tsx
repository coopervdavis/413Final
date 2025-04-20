import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchEntertainerBookings,
  addEntertainer,
} from "../api/FinalAPI";
import { EntertainerBooking } from "../types/EntertainerBooking";
import { Entertainer } from "../types/Entertainer";
import EntertainerModal from "./EntertainerModal";

const EntertainerBookingList: React.FC = () => {
  const [bookings, setBookings] = useState<EntertainerBooking[]>([]);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {
      const data = await fetchEntertainerBookings();
      setBookings(data);
    } catch (error) {
      console.error("Failed to fetch entertainer bookings:", error);
    }
  };

  const handleDetailsClick = (entertainerID: number) => {
    navigate(`/entertainers/${entertainerID}`);
  };

  const handleAddSubmit = async (formData: Partial<Entertainer>) => {
    try {
      await addEntertainer(formData);
      setShowForm(false);
      await loadBookings(); // refresh list
    } catch (err) {
      console.error(err);
      alert("Error adding entertainer.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Entertainer Booking Summary</h2>

      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Stage Name</th>
            <th>Booking Count</th>
            <th>Last Booked</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td>{booking.entStageName}</td>
              <td>{booking.bookingCount}</td>
              <td>{booking.lastBookedDate ?? "N/A"}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleDetailsClick(booking.entertainerID)}
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-end mt-3">
        <button
          className="btn btn-success"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Cancel" : "Add Entertainer"}
        </button>
      </div>

      {showForm && (
        <EntertainerModal
            show={showForm}
            onClose={() => setShowForm(false)}
            onSubmit={handleAddSubmit}
        />
        )}
    </div>
  );
};

export default EntertainerBookingList;
