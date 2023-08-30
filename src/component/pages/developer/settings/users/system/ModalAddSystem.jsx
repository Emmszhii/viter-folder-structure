import React from "react";
import Modal from "../../../../../partials/structure/Modal";
import { FaTimes } from "react-icons/fa";
import SpinnerButton from "../../../../../partials/spinners/SpinnerButton";

const ModalAddSystem = ({ setIsAddModal }) => {
  const handleClose = () => setIsAddModal(false);

  return (
    <>
      <Modal>
        <div className="modal__header relative">
          <h3> System </h3>
          <button className="absolute -top-4 right-0 " onClick={handleClose}>
            <FaTimes className="text-gray-400 text-base" />
          </button>
        </div>

        <div className="modal__body min-h-[30vh]">
          <div className="form__wrap">
            <label htmlFor="">Name</label>
            <input type="text" />
            {/* value={itemEdit ? itemEdit.name : ""} */}
            <span className="error-show">*required</span>
          </div>
          <div className="form__wrap">
            <label htmlFor="">Email</label>
            <input type="email" />
            <span className="error-show">*required</span>
          </div>
          <div className="form__wrap">
            <label htmlFor="">Role</label>
            <input type="text" />
            <span className="error-show">*required</span>
          </div>
        </div>

        <div className="modal__action flex justify-end mt-6 gap-2">
          <button className="btn btn--accent">
            {/* {itemEdit.length == 0 ? "Save" : "Add"} */}
            Add
            <SpinnerButton />
          </button>
          <button className="btn btn--cancel" onClick={handleClose}>
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ModalAddSystem;
