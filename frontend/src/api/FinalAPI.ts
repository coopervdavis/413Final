import { Entertainer } from "../types/Entertainer";
import { EntertainerBooking } from "../types/EntertainerBooking";

const API_URL = "https://localhost:5000"; // update if needed


// list page
export const fetchEntertainerBookings = async (): Promise<EntertainerBooking[]> => {
    const response = await fetch(`${API_URL}/Final/BookingSummary`);
  
    if (!response.ok) {
      throw new Error(`Failed to fetch bookings: ${response.status}`);
    }
  
    return await response.json();
  };

  // details page
  export const fetchEntertainerById = async (id: number): Promise<Entertainer> => {
    const response = await fetch(`${API_URL}/Final/Details/${id}`);
  
    if (!response.ok) {
      throw new Error(`Failed to fetch entertainer with ID ${id}`);
    }
  
    return await response.json();
  };


  // add
  export const addEntertainer = async (formData: Partial<Entertainer>): Promise<void> => {
    const response = await fetch(`${API_URL}/Final/Add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  
    if (!response.ok) {
      throw new Error("Failed to add entertainer");
    }
  };


// ✅ 1. Update entertainer
export const updateEntertainer = async (
    id: number,
    formData: Partial<Entertainer>
  ): Promise<void> => {
    const response = await fetch(`${API_URL}/Final/Update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  
    if (!response.ok) {
      throw new Error(`Failed to update entertainer with ID ${id}`);
    }
  };
  
  
  // ✅ 2. Delete entertainer
  export const deleteEntertainer = async (id: number): Promise<void> => {
    const response = await fetch(`${API_URL}/Final/Delete/${id}`, {
      method: "DELETE",
    });
  
    if (!response.ok) {
      throw new Error(`Failed to delete entertainer with ID ${id}`);
    }
  };