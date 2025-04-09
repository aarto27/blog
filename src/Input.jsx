import React, { useState } from "react";

export const Input = () => {
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value); 
  };

  const handleSubmit = () => {
    const num = Number(value);

    
    if (num >= 15 && num <= 25) {
      alert("Your value is: " + num);
    } else {
      alert("Please enter a number between 15 and 25");
      setValue("");
    }
  };

  return (
    <div>
      <label>Enter a number (15-25): </label>
      <input
        type="number"
        value={value}
        onChange={handleInputChange}
        placeholder="15-25"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
