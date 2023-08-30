import React from "react";
import { FaTimes } from "react-icons/fa";
import Modal from "../../../../../partials/structure/Modal";
import SpinnerButton from "../../../../../partials/spinners/SpinnerButton";

const OtherAddModal = ({ item, setItem, setIsShowAddModal }) => {
  const handleCloseModal = () => {
    setIsShowAddModal(false);
    setItem([]);
  };

  return (
    <>
      <Modal>
        <div className="modal__header relative">
          <h3> Role </h3>
          <button
            className="absolute -top-4 right-0 "
            onClick={handleCloseModal}
          >
            <FaTimes className="text-gray-400 text-base" />
          </button>
        </div>

        <div className="modal__body min-h-[30vh]">
          <div className="form__wrap">
            <label htmlFor="">Role</label>
            <input type="text" value={item ? item.name : ""} />
            <span className="error-show">*required</span>
          </div>
          <div className="form__wrap">
            <label htmlFor="">Description</label>
            <textarea value={item ? item.description : ""}></textarea>
            <span className="error-show">*required</span>
          </div>
        </div>

        <div className="modal__action flex justify-end mt-6 gap-2">
          <button className="btn btn--accent">
            {item.length == 0 ? "Save" : "Add"}
            <SpinnerButton />
          </button>
          <button className="btn btn--cancel" onClick={handleCloseModal}>
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};

export default OtherAddModal;
