import "./About.css";
import React from "react";

function About() {
  return (
    <div className="about container">
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestiae
        voluptatem beatae harum ipsum nihil iusto totam omnis accusantium,
        temporibus libero esse, repudiandae fugiat cupiditate porro aperiam
        inventore debitis nobis consequatur tenetur? Ipsam dolorem, provident
        aperiam reiciendis necessitatibus quibusdam animi id deleniti ratione.
        Facilis nisi iure veniam unde, et est.
      </p>

      <div className="open-source">
        <h3>
          <div className="svg"></div>Open Source:
        </h3>
        <p>
          MyNotebook is an open source project. You can find the source code on{" "}
          <a
            href="https://github.com/itsme-Subid/Resume-Builder"
            target={"_blank"}
            rel="noreferrer"
          >
            GitHub.
          </a>
          <br />
          I'm currently using <strong>react.js</strong> to build MyNotebook.
        </p>
      </div>
      <div className="credits">
        <h3>
          <div className="svg"></div>Credits:
        </h3>
        <p>
          MyNotebook is built by{" "}
          <a
            href="https://github.com/itsme-Subid"
            target={"_blank"}
            rel="noreferrer"
          >
            Subid
          </a>
          .<br />
          The icons used in MyNotebook are from{" "}
          <a
            href="https://ionic.io/ionicons"
            target={"_blank"}
            rel="noreferrer"
          >
            Ionicons
          </a>
          .<br />
          The font used in MyNotebook is from{" "}
          <a
            href="https://fonts.google.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            Google Fonts
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default About;
