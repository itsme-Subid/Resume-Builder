import React from "react";

function Achievements({ data, setData, setStep }) {
  let achievementSubmit = (event) => {
    event.preventDefault();
    let form = new FormData(event.target);
    let JSONform = {};
    for (const key of form.keys()) {
      JSONform[key] = form.get(key);
    }
    setData({ ...data, ...JSONform });
    setStep(5);
  };
  return (
    <div className="achievements">
      <h2 style={{ marginBottom: "1rem" }}>Achievements</h2>
      <form id="achievements" onSubmit={achievementSubmit}>
        <div className="form-group">
          <label htmlFor="achievements">Achievements you have</label>
          <textarea
            name="achievements"
            id="achievements"
            cols="30"
            rows="10"
            placeholder="Enter your achievements, e.g. Won 1st prize in Hackathon, etc."
          ></textarea>
        </div>
        <div className="buttons">
          <button
            type="button"
            onClick={() => {
              setStep(3);
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

export default Achievements;
