import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { vote } from "./votingSlice";
import ReactDOM from "react-dom";

export const VotingForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    candidate: "",
    voter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(vote(formData));

    setFormData({
      candidate: "",
      voter: "",
    });
  };

  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <label htmlFor="voter">Student Name:</label>
        <input
          type="text"
          name="voter"
          id="voter"
          value={formData.voter}
          onChange={handleChange}
          required
        />

        <label htmlFor="candidate">Choose Monitor:</label>
        <select
          name="candidate"
          id="candidate"
          value={formData.candidate}
          onChange={handleChange}
          required
        >
          <option value="">Select a candidate</option>
          <option value="Rohit">Rohit</option>
          <option value="Sohan">Sohan</option>
          <option value="Rohan">Rohan</option>
        </select>

        <button type="submit">Vote</button>
        <button type="button" onClick={onClose}>
          X
        </button>
      </form>
    </div>,
    document.getElementById("portal-root")
  );
};
