import React from "react";

function Resume({ data, setStep }) {
//   let dataCopy = JSON.parse(JSON.stringify(data));
//   console.log(dataCopy);
//   let parsedData = Object.keys(dataCopy).map((key) => {
//     return (
//       <>
//         {/* <div className="data-item" key={key}> */}
//         {key} : {dataCopy[key]}
//         {/* </div> */}
//       </>
//     );
//   });
//   console.log(parsedData);
  return (
    <div className="resume">
      <h3>Resume</h3>
      {/* <div className="data" style={{ wordBreak: "break-word" }}>
        {Object.keys(dataCopy).map((key) => (
          <div key={key}>
            {key} : {dataCopy[key]}
          </div>
        ))}
      </div> */}
      <button
        type="button"
        onClick={() => {
          setStep(6);
        }}
      >
        Previous
      </button>
    </div>
  );
}

export default Resume;
