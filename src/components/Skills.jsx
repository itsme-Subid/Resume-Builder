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
          <label htmlFor="skills">Skills you have</label>
          <input
            type="text"
            placeholder="Enter your Skills, e.g. React.js, Angular, Node.js, MongoDB, etc."
            name="skills"
            id="skills"
            title="Please enter at least 3 characters"
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="skillRate">Rate your skill</label>
          <select name="skillRate" id="skillRate">
            <option value="Beginner" >Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced" selected>Advanced</option>
          </select>
        </div> */}
        <div className="buttons">
          <button
            type="button"
            onClick={() => {
              setStep(2);
            }}
          >
            Previous
          </button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
}

export default Skills;
