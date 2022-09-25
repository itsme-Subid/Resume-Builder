import "./Home.css";
import React from "react";

function Home() {
  return (
    <div className="container home">
      <h2>Create Your Resume</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter your name..."
            id="name"
            pattern="[A-Za-z ]{3,}"
            title="Please enter at least 3 characters"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter your name..."
            id="name"
            pattern="[A-Za-z ]{3,}"
            title="Please enter at least 3 characters"
            required
          />
        </div>
      </form>
    </div>
  );
}

export default Home;
