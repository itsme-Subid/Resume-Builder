import React from "react";

function PersonalProjects({ data, step, setData, setStep }) {
  let personalProjectSubmit = (event) => {
    event.preventDefault();
    let form = new FormData(event.target);
    let JSONform = {};
    for (const key of form.keys()) {
      JSONform[key] = form.get(key);
    }
    setData({ ...data, ...JSONform });
    setStep(step + 1);
  };
  return (
    <div className="personalProjects">
      <h2 style={{ marginBottom: "1rem" }}>Personal Projects</h2>
      <form id="personalProjects" onSubmit={personalProjectSubmit}>
        <div className="form-group">
          <label htmlFor="personalProjects">
            Name of the Projects you have worked with
          </label>
          <input
            type="text"
            placeholder="Enter your Personal Projects, e.g. Portfolio, etc."
            name="personalProjects"
            id="personalProjects"
            pattern="[A-Za-z0-9 ]{3,}"
            title="Please enter at least 3 characters"
          />
        </div>
        <div className="form-group">
          <label htmlFor="personalProjectsTimeStart">
            Time of start of the project
          </label>
          <input
            type="date"
            name="personalProjectsTimeStart"
            id="personalProjectsTimeStart"
            pattern="[A-Za-z0-9 ]{3,}"
            title="Please enter at least 3 characters"
          />
        </div>
        <div className="form-group">
          <label htmlFor="personalProjectsTimeEnd">
            Time of end of the project
          </label>
          <input
            type="text"
            name="personalProjectsTimeEnd"
            placeholder="Enter the time of end of the project, e.g. Present, 2021, etc."
            id="personalProjectsTimeEnd"
            pattern="[A-Za-z0-9 ]{3,}"
            title="Please enter at least 3 characters"
          />
        </div>
        <div className="form-group">
          <label htmlFor="personalProjectsDescription">
            Description of the project (Optional)
          </label>
          <textarea
            name="personalProjectsDescription"
            id="personalProjectsDescription"
            placeholder="Enter the description of the project, e.g. This is my portfolio, etc."
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="personalProjectsLink">
            Link your project (Optional)
          </label>
          <input
            type="text"
            name="personalProjectsLink"
            placeholder="Enter the link of the project, e.g. htttps://github.com/yourname/yourproject, etc."
            id="personalProjectsLink"
            title="Please enter at least 3 characters"
          />
        </div>
        <div className="buttons">
          <button
            type="button"
            onClick={() => {
              setStep(step - 1);
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

export default PersonalProjects;
