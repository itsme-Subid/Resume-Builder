import "./Resume.css";
import React from "react";

function Resume({ data, setStep }) {
  let reader = new FileReader();
  reader.readAsDataURL(data.userImage);
  reader.onload = () => {
    document.querySelector(".user-image").src = reader.result;
  };
  console.log(data.FName);
  return (
    <div className="resume">
      <h3>Resume</h3>
      <div className="resume-wrapper">
        <div className="header">
          <img className="user-image" alt="" />
          <div className="user-details">
            <h4>
              {data.FName} {data.LName}
            </h4>
            <p>{data.applyFor}</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => {
          setStep(7);
        }}
      >
        Previous
      </button>
    </div>
  );
}

export default Resume;
