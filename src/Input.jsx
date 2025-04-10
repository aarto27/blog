import React, { useState } from "react";

export const Input = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;

   
    if (newValue === "") {
      setValue("");
      setError("");
      return;
    }

    setValue(newValue);

    if (newValue <= 15 || newValue >= 25) {
      setError("Number must be between 15 and 25");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <label>Enter a number (15-25): </label>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        placeholder="15-25"
      />
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};
