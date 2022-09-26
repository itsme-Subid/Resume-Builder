import React from "react";

function Experience({ data, setData, setStep }) {
  let ExperienceSubmit = (event) => {
    event.preventDefault();
    let form = new FormData(event.target);
    let JSONform = {};
    for (const key of form.keys()) {
      JSONform[key] = form.get(key);
    }
    setData({ ...data, ...JSONform });
    setStep(6);
  };
  return (
    <div className="Experience">
      <h2 style={{ marginBottom: "1rem" }}>Experience</h2>
      <form id="Experience" onSubmit={ExperienceSubmit}>
        <div className="form-group">
          <label htmlFor="position">Title/Position</label>
          <input
            name="position"
            id="position"
            placeholder="Enter your Position in the company, e.g. Software Engineer, Web Developer, etc."
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            name="company"
            id="company"
            placeholder="Enter the name of the company you worked for"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="yearOfJoining">Year of Joining</label>
          <input
            type="number"
            name="yearOfJoining"
            id="yearOfJoining"
            placeholder="Enter the year you joined the company"
            min="1900"
            max="2025"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="yearOfLeaving">Year of Leaving</label>
          <input
            type="number"
            name="yearOfLeaving"
            id="yearOfLeaving"
            placeholder="Enter the year you left the company"
            min="1900"
            max="2025"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="companyLocation">Company Location</label>
          <input
            name="companyLocation"
            id="companyLocation"
            placeholder="Enter the location of the company"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="companyDescription">
            Company Description (optional)
          </label>
          <textarea
            name="companyDescription"
            id="companyDescription"
            cols="30"
            rows="10"
            placeholder="Enter the description of the company"
          ></textarea>
        </div>
        {/* Tasks in the company */}
        <div className="form-group">
          <label htmlFor="tasks">Achievements/Tasks</label>
          <textarea
            name="tasks"
            id="tasks"
            cols="30"
            rows="10"
            placeholder="Enter the achievements/tasks you performed in the company"
          ></textarea>
        </div>
        <div className="buttons">
          <button
            type="button"
            onClick={() => {
              setStep(4);
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

export default Experience;
