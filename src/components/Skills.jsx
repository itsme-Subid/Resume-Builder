import "./Skills.css";
import React from "react";

function Skills({ data, setData, setStep }) {
  let skillSubmit = (event) => {
    event.preventDefault();
    let form = new FormData(event.target);
    let JSONform = {};
    for (const key of form.keys()) {
      JSONform[key] = form.get(key);
    }
    setData({ ...data, ...JSONform });
    setStep(4);
  };
  return (
    <div className="skills">
      <h2 style={{ marginBottom: "1rem" }}>Skills</h2>
      <form id="skills" onSubmit={skillSubmit}>
        <div className="form-group">
          <label htmlFor="skills">Skills</label>
          <input
            type="text"
            placeholder="Enter your Skills, e.g. React.js, Angular, Node.js, MongoDB, etc."
            name="skills"
            id="skills"
            pattern="[A-Za-z0-9 ]{3,}"
            title="Please enter at least 3 characters"
          />
        </div>
        <div className="form-group">
          <label htmlFor="skillRate">Languages</label>
          <select name="skillRate" id="skillRate">
            <option value="Beginner" >Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced" selected>Advanced</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Skills;
