import React, { useState, useEffect } from "react";
import PersonalDetails from "../components/PersonalDetails";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Achievements from "../components/Achievements";
import Experience from "../components/Experience";
import PersonalProjects from "../components/PersonalProjects";
import Interest from "../components/Interest";
import Resume from "../components/Resume";

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
      ) : step === 4 ? (
        <Achievements data={data} setData={setData} setStep={setStep} />
      ) : step === 5 ? (
        <Experience data={data} setData={setData} setStep={setStep} />
      ) : step === 6 ? (
        <PersonalProjects data={data} setData={setData} setStep={setStep} />
      ) : step === 7 ? (
        <Interest data={data} setData={setData} setStep={setStep} />
      ) : (
        <Resume data={data} setStep={setStep} />
      )}
    </div>
  );
}

export default Home;
