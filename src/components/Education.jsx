import "./Education.css";
import React from "react";

function Education({ data, setData, setStep }) {
  let educationSubmit = (event) => {
    event.preventDefault();
    let form = new FormData(event.target);
    let JSONform = {};
    for (const key of form.keys()) {
      JSONform[key] = form.get(key);
    }
    setData({ ...data, ...JSONform });
    setStep(3);
  };
  return (
    <div className="education">
      <h2 style={{ marginBottom: "1rem" }}>Education</h2>
      <form id="education" onSubmit={educationSubmit}>
        <div className="form-group">
          <label htmlFor="studyProgram">Study Program</label>
          <input
            type="text"
            placeholder="Enter your study program name, e.g. HS, B.Tech, M.Tech, PhD"
            name="studyProgram"
            id="studyProgram"
            pattern="[A-Za-z ]{3,}"
            title="Please enter at least 3 characters"
          />
        </div>
        <div className="form-group">
          <label htmlFor="institute">Institute/Place of Education</label>
          <input
            type="text"
            placeholder="Enter your institute name"
            name="institute"
            id="institute"
            pattern="[A-Za-z ]{3,}"
            title="Please enter at least 3 characters"
          />
        </div>
        <div className="form-group">
          <label htmlFor="instituteDescription">
            Institute Description (Optional)
          </label>
          <textarea
            name="instituteDescription"
            id="instituteDescription"
            cols="30"
            rows="10"
            placeholder="Enter institute description"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="yearOfStart">Year of Start</label>
          <input
            type="number"
            placeholder="Enter year of start"
            name="yearOfStart"
            id="yearOfStart"
            min="1900"
            max="2020"
          />
        </div>
        <div className="form-group">
          <label htmlFor="yearOfPassing">Year of Passing</label>
          <input
            type="number"
            placeholder="Enter year of passing"
            name="yearOfPassing"
            id="yearOfPassing"
            min="1950"
            max="2025"
          />
        </div>
        <div className="form-group">
          <label htmlFor="percentage">Percentage/CGPA</label>
          <input
            type="number"
            placeholder="Enter your percentage/CGPA"
            name="percentage"
            id="percentage"
            min="0"
            max="100"
          />
        </div>
        <div className="buttons">
          <button
            type="button"
            onClick={() => {
              setStep(1);
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

export default Education;
