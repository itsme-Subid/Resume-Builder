import "./Education.css";
import React from "react";

function Education({ data, step, setData, setStep }) {
  let educationSubmit = (event) => {
    event.preventDefault();
    let form = new FormData(event.target);
    let JSONform = {};
    for (const key of form.keys()) {
      JSONform[key] = form.get(key);
    }
    console.log(JSONform);
    setData({ ...data, ...JSONform });
    setStep(step + 1);
  };
  let arr = ["10th", "12th", "Graduation", "Post Graduation"];
  return (
    <div className="education">
      <h2 style={{ marginBottom: "1rem" }}>Education</h2>
      <form id="education" onSubmit={educationSubmit}>
        {arr.map((item, index) => {
          return (
            <section key={index}>
              <h3 style={{marginBottom: "1rem", opacity: ".45"}}>{item} Study Program</h3>
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
                  type="text"
                  placeholder="Enter year of passing"
                  name="yearOfPassing"
                  id="yearOfPassing"
                  min="1950"
                  max="2025"
                />
              </div>
            </section>
          );
        })}
        {/* <div className="education-program-heading">1st Education Program</div>
        <section>
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
        </section>
        <div className="education-program-heading">2nd Education Program</div>
        <section>
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
        </section>
        <div className="education-program-heading">3rd Education Program</div>
        <section>
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
        </section> */}
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

export default Education;
