import React, { useState, useEffect } from "react";
import PersonalDetails from "../components/PersonalDetails";
import Education from "../components/Education";
import Skills from "../components/Skills";

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
      ) : step === 3 ? (
        <Skills data={data} setData={setData} setStep={setStep} />
      ) : (
        <div className="">
          hello world
        </div>
      )}
    </div>
  );
}

export default Home;
