import "./Home.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [inputVal, setInputVal] = useState("+91");
  let personalDetailSubmit = (event) => {
    event.preventDefault();
    let form = new FormData(event.target);
    let JSONform = {};
    for (const key of form.keys()) {
      JSONform[key] = form.get(key);
    }
    console.log(JSONform);
  };
  return (
    <div className="container home">
      <h2>Create Your Resume</h2>
      <h3 style={{ textAlign: "center" }}>Personal Details</h3>
      <form id="personalDetails" onSubmit={personalDetailSubmit}>
        <div
          className="form-group"
          style={{
            position: "relative",
            width: "15rem",
            height: "15rem",
            borderRadius: "50%",
            overflow: "hidden",
            background: "--dark-color",
            border: "1px solid var(--light-color)",
            margin: "2rem auto",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              placeContent: "center",
              justifyContent: "center",
              alignItems: "center",
              marginInline: "auto",
            }}
          >
            <span data-icon="camera">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path
                  fill="currentColor"
                  d="M21.317 4.381H10.971L9.078 2.45c-.246-.251-.736-.457-1.089-.457H4.905c-.352 0-.837.211-1.078.468L1.201 5.272C.96 5.529.763 6.028.763 6.38v1.878l-.002.01v11.189a1.92 1.92 0 0 0 1.921 1.921h18.634a1.92 1.92 0 0 0 1.921-1.921V6.302a1.92 1.92 0 0 0-1.92-1.921zM12.076 18.51a5.577 5.577 0 1 1 0-11.154 5.577 5.577 0 0 1 0 11.154zm0-9.506a3.929 3.929 0 1 0 0 7.858 3.929 3.929 0 0 0 0-7.858z"
                ></path>
              </svg>
            </span>
            <div>Add Your Photo</div>
          </div>
          <input
            type="file"
            accept="image/gif,image/jpeg,image/jpg,image/png"
            style={{
              opacity: "0",
              position: "absolute",
              width: "100%",
              height: "100%",
              top: "0",
              zIndex: "1",
              cursor: "pointer",
            }}
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="LName">Last name</label>
          <input
            type="text"
            placeholder="Enter your last name..."
            name="LName"
            id="LName"
            pattern="[A-Za-z ]{3,}"
            title="Please enter at least 3 characters"
          />
        </div>
        <div className="form-group">
          <label htmlFor="applyFor">Applying for</label>
          <input
            type="text"
            placeholder="Enter the position you are applying for..."
            name="applyFor"
            id="applyFor"
          />
        </div>
        <div className="form-group">
          <label htmlFor="aboutSelf">About yourself</label>
          <textarea
            type="text"
            placeholder="Enter about yourself..."
            name="aboutSelf"
            id="aboutSelf"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email..."
            name="email"
            id="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="Please enter a valid email address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <div className="phoneNumber">
            <input
              type="text"
              id="country_code"
              name="country_code"
              placeholder="County code"
              value={inputVal}
              pattern="[+][0-9]{2,3}"
              maxLength="4"
              onChange={(e) => {
                setInputVal(e.target.value);
              }}
            />
            <input
              type="tel"
              placeholder="Enter your phone number..."
              name="phone"
              id="phone"
              pattern="[0-9]{10}"
              title="Please enter a valid phone number"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <span className="label_faded">Please enter city where you live</span>
          <input
            type="text"
            placeholder="Enter your city..."
            name="city"
            id="city"
            title="Please enter a valid city"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Country">Country</label>
          <span className="label_faded">
            Please enter Country where you live
          </span>
          <input
            type="text"
            placeholder="Enter your Country..."
            name="Country"
            id="Country"
            title="Please enter a valid Country"
          />
        </div>
        <div className="form-group">
          <label htmlFor="website">Website</label>
          <span className="label_faded">Optional</span>
          <input
            type="text"
            placeholder="Enter your Website..."
            name="website"
            id="website"
            title="Please enter a valid website"
          />
        </div>
        <div className="form-group">
          <label htmlFor="linkedIn">LinkedIn</label>
          <span className="label_faded">Optional</span>
          <input
            type="text"
            placeholder="Enter your LinkedIn profile link..."
            name="linkedIn"
            id="linkedIn"
            title="Please enter a valid LinkedIn profile link"
          />
        </div>
        <div className="form-group">
          <label htmlFor="github">GitHub</label>
          <span className="label_faded">Optional</span>
          <input
            type="text"
            placeholder="Enter your GitHub profile link..."
            name="github"
            id="github"
            title="Please enter a valid LinkedIn profile link"
          />
        </div>
        <div className="form-group">
          <label htmlFor="languages">Preferred Languages</label>
          <input
            type="text"
            placeholder="Enter your preferred languages..."
            name="languages"
            id="languages"
            title="Please enter your languages"
          />
        </div>
        <button type="submit">
          <Link to={`/otherDetails`}>Next</Link>
        </button>
      </form>
    </div>
  );
}

export default Home;
