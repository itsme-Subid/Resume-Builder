import React from "react";

function Education() {
  return (
    <div className="education">
      <h2 style={{ marginBottom: "1rem" }}>Education</h2>
      <div className="form-group">
        <label htmlFor="FName">First name</label>
        <input
          type="text"
          placeholder="Enter your First name..."
          name="FName"
          id="FName"
          pattern="[A-Za-z ]{3,}"
          title="Please enter at least 3 characters"
        />
      </div>
    </div>
  );
}

export default Education;
