import React, { useState } from "react";
import { Entertainer } from "../types/Entertainer";

interface EntertainerFormProps {
  initialData?: Partial<Entertainer>;
  onSubmit: (formData: Partial<Entertainer>) => void;
  onCancel: () => void;
  submitLabel: string;
}
// form content
const EntertainerForm: React.FC<EntertainerFormProps> = ({
  initialData = {},
  onSubmit,
  onCancel,
  submitLabel,
}) => {
  const [formData, setFormData] = useState<Partial<Entertainer>>(
    () => initialData ?? {}
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 mt-4 shadow-sm">
      <h4 className="mb-3">{submitLabel}</h4>

      <div className="mb-3">
        <label className="form-label">Stage Name</label>
        <input
          type="text"
          className="form-control"
          name="entStageName"
          value={formData.entStageName || ""}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">SSN</label>
        <input
          type="text"
          className="form-control"
          name="entSSN"
          value={formData.entSSN || ""}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Street Address</label>
        <input
          type="text"
          className="form-control"
          name="entStreetAddress"
          value={formData.entStreetAddress || ""}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">City</label>
        <input
          type="text"
          className="form-control"
          name="entCity"
          value={formData.entCity || ""}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">State</label>
        <input
          type="text"
          className="form-control"
          name="entState"
          value={formData.entState || ""}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Zip Code</label>
        <input
          type="text"
          className="form-control"
          name="entZipCode"
          value={formData.entZipCode || ""}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Phone Number</label>
        <input
          type="text"
          className="form-control"
          name="entPhoneNumber"
          value={formData.entPhoneNumber || ""}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="text"
          className="form-control"
          name="entEMailAddress"
          value={formData.entEMailAddress || ""}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Website</label>
        <input
          type="text"
          className="form-control"
          name="entWebPage"
          value={formData.entWebPage || ""}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Date Entered</label>
        <input
          type="text"
          className="form-control"
          name="dateEntered"
          value={formData.dateEntered || ""}
          onChange={handleChange}
        />
      </div>

      <div className="d-flex justify-content-end gap-2">
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          {submitLabel}
        </button>
      </div>
    </form>
  );
};

export default EntertainerForm;
