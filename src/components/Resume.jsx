import "./Resume.css";
import React from "react";

function Resume({ data, setStep }) {
  let reader = new FileReader();
  reader.readAsDataURL(data.userImage);
  reader.onload = () => {
    document.querySelector(".user-image").src = reader.result;
  };
  return (
    <div className="resume">
      <h3>Resume</h3>
      {/* Resume CV*/}
      <div className="resume-wrapper">
        <div className="resume-container">
          <div className="top">
            <div className="imgBox">
              <div className="box">
                <img alt="" className="user-image" />
              </div>
            </div>
            <div className="profileText">
              <h3>
                {data.FName} {/* <br /> */}
                {data.LName}
                <br />
                <span>{data.applyFor}</span>
              </h3>
            </div>
          </div>
          <div className="contentBox">
            <div className="leftSide">
              <h3>Contact Info</h3>
              <ul>
                <li>
                  <span className="icon">
                    <ion-icon name="call-outline"></ion-icon>
                  </span>
                  <span className="text">+91 890 217 5XXX</span>
                </li>
                <li>
                  <span className="icon">
                    <ion-icon name="mail-outline"></ion-icon>
                  </span>
                  <span className="text">itsmesubid@gmail.com</span>
                </li>
                <li>
                  <span className="icon">
                    <ion-icon name="earth-outline"></ion-icon>
                  </span>
                  <span className="text">itsme-subid.github.io/blog-2022</span>
                </li>
                <li>
                  <span className="icon">
                    <ion-icon name="location-outline"></ion-icon>
                  </span>
                  <span className="text">Kolkata, India</span>
                </li>
              </ul>
              <h3>Education</h3>
              <ul className="education">
                <li>
                  <h5>2018 - 2022</h5>
                  <h4>B.Tech in Computer Science</h4>
                  <h6>University of Engineering and Management</h6>
                </li>
                <li>
                  <h5>2016 - 2018</h5>
                  <h4>Higher Secondary</h4>
                  <h6>St. Xavier's High School</h6>
                </li>
                <li>
                  <h5>2014 - 2016</h5>
                  <h4>Secondary</h4>
                  <h6>St. Xavier's High School</h6>
                </li>
              </ul>
              <h3>Language</h3>
              <ul className="language">
                <li>
                  <span className="text">English</span>
                  <span className="percent">
                    <div style={{ width: "90%" }}></div>
                  </span>
                </li>
                <li>
                  <span className="text">Hindi</span>
                  <span className="percent">
                    <div style={{ width: "70%" }}></div>
                  </span>
                </li>
                <li>
                  <span className="text">Bengali</span>
                  <span className="percent">
                    <div style={{ width: "75%" }}></div>
                  </span>
                </li>
              </ul>
              <h3>Interest</h3>
              <ul className="interest">
                <li>
                  <span className="icon">
                    <ion-icon name="heart"></ion-icon>
                  </span>
                  Firebase
                </li>
                <li>
                  <span className="icon">
                    <ion-icon name="heart"></ion-icon>
                  </span>
                  Node.js
                </li>
                <li>
                  <span className="icon">
                    <ion-icon name="heart"></ion-icon>
                  </span>
                  Next.js
                </li>
                <li>
                  <span className="icon">
                    <ion-icon name="heart"></ion-icon>
                  </span>
                  Photography
                </li>
              </ul>
            </div>
            <div className="rightSide">
              <div className="about">
                <h3>Profile</h3>
                <p>
                  I'm a passionate HS student in development and design,
                  specializing in React JS, Advanced JavaScript, MySQL, C/C++,
                  and Java.
                </p>
              </div>
              <div className="about">
                <h3>Experience</h3>
                <div className="box">
                  <div className="year-company">
                    <h5>2014 - 2016</h5>
                    <h5>Company Name</h5>
                  </div>
                  <div className="text">
                    <h4>Senior UX Designer</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad dignissimos officia exercitationem
                    </p>
                  </div>
                </div>
                <div className="box">
                  <div className="year-company">
                    <h5>2016 - 2019</h5>
                    <h5>Company Name</h5>
                  </div>
                  <div className="text">
                    <h4>Senior UX Designer</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad dignissimos officia exercitationem
                    </p>
                  </div>
                </div>
                <div className="box">
                  <div className="year-company">
                    <h5>2019 - Present</h5>
                    <h5>Company Name</h5>
                  </div>
                  <div className="text">
                    <h4>Senior UX Designer</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad dignissimos officia exercitationem
                    </p>
                  </div>
                </div>
              </div>
              <div className="about skills">
                <h3>Professional Skillls</h3>
                <div className="box">
                  <h4>HTML</h4>
                  <span className="percent">
                    <div className="" style={{ width: "95%" }}></div>
                  </span>
                </div>
                <div className="box">
                  <h4>CSS</h4>
                  <span className="percent">
                    <div className="" style={{ width: "75%" }}></div>
                  </span>
                </div>
                <div className="box">
                  <h4>Javascript</h4>
                  <span className="percent">
                    <div className="" style={{ width: "80%" }}></div>
                  </span>
                </div>
                <div className="box">
                  <h4>Photoshop</h4>
                  <span className="percent">
                    <div className="" style={{ width: "90%" }}></div>
                  </span>
                </div>
                <div className="box">
                  <h4>Illustrator</h4>
                  <span className="percent">
                    <div className="" style={{ width: "70%" }}></div>
                  </span>
                </div>
                <div className="box">
                  <h4>Figma</h4>
                  <span className="percent">
                    <div className="" style={{ width: "65%" }}></div>
                  </span>
                </div>
              </div>
            </div>
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
