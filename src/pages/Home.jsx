import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import React, { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState({});
  const [step, setStep] = useState(1);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="container home">
      <h2 style={{ marginBottom: "1rem" }}>Create Your Resume</h2>
      {step === 1 ? (
        <PersonalDetails data={data} setData={setData} setStep={setStep} />
      ) : step === 2 ? (
        <Education data={data} setData={setData} setStep={setStep} />
      ) : (
        <div>Done</div>
      )}
    </div>
  );
}

export default Home;
