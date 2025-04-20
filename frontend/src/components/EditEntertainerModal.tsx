import React from "react";
import { Entertainer } from "../types/Entertainer";
import EntertainerForm from "./EntertainerForm";

interface EditEntertainerModalProps {
  show: boolean;
  onClose: () => void;
  onSubmit: (formData: Partial<Entertainer>) => void;
  entertainer: Entertainer;
}
// pop up for editing
const EditEntertainerModal: React.FC<EditEntertainerModalProps> = ({
  show,
  onClose,
  onSubmit,
  entertainer,
}) => {
  if (!show) return null;

  return (
    <div className="modal d-block" tabIndex={-1} style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Entertainer</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <EntertainerForm
              initialData={entertainer}
              onSubmit={onSubmit}
              onCancel={onClose}
              submitLabel="Update Entertainer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEntertainerModal;
