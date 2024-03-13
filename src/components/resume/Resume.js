import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import profileImage from "../../img/akshay.jpg";
import styles from "./Resume.module.css";
import resumePdf from "./resumeakshay.pdf"; 

const Resume = () => {
  const handleDownload = () => {
    const existingPdfPath = resumePdf;

    fetch(existingPdfPath)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resumeakshay.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(error => console.error('Error downloading existing PDF:', error));
  };

  return (
    <div>
      <div className={styles.downloadButton}>
        <button onClick={handleDownload}>Download PDF</button>
      </div>
      <div id="resume" className={styles.resume}>
        <div className={styles.leftColumn}>
          <div className={styles.header}>
            <img src={profileImage} alt="Akshay Goyal" />
            <div>
              <h1 style={{ fontSize: "2rem", marginBottom: "5px" }}>
                Akshay Goyal
              </h1>
              <p style={{ fontSize: "1.2em", marginBottom: "5px" }}>
                Indore, India
              </p>
              <p style={{ fontSize: "1.2em", marginBottom: "5px" }}>
                +918109078749
              </p>
              <p style={{ fontSize: "1.2em", marginBottom: "5px" }}>
                akshaygoyal@gmail.com
              </p>
            </div>
          </div>
          <div className={styles.section}>
            <h2>Technical Skills</h2>
            <ul>
              <li>ExpressJS</li>
              <li>GraphQL</li>
              <li>JavaScript</li>
              <li>NodeJS</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
        <div className={styles.seprator}></div>
        <div className={styles.rightColumn}>
          <div className={styles.section}>
            <p>
              Meticulous fullstack developer with 8+ years of experience
              developing, testing, and designing software solutions. In-depth
              understanding of web technologies with a focus on delivering
              innovative business solutions. Excels in fast-paced, high-energy,
              and deadline-driven environments with a willingness to take on
              additional tasks.
            </p>
          </div>
          <div className={styles.section}>
            <h2>Experience</h2>
            <div className={`${styles.job} ${styles.inkdesk}`}>
              <h3>Lead Software Engineer at Inkdesk (Nov 22 - Present)</h3>
              <p>Product company</p>
              <ul>
                <li>
                  Set up CI/CD pipeline to deploy application on AWS using
                  Docker & Kubernetes
                </li>
                <li>
                  Developed user story flow from scratch using NextJs on backend
                  and ReactJS frontend and MySQL for database
                </li>
                <li>
                  Conceptualized original ideas that bring simplicity and user
                  friendliness to complex design roadblocks
                </li>
                <li>
                  Collaborated with product management and engineering to define
                  and implement innovative solutions for the product direction,
                  visuals, and experience
                </li>
              </ul>
            </div>
            <div className={`${styles.job} ${styles.impetus}`}>
              <h3>Lead Javascript Developer at Impetus (Jul 18 - Oct 22)</h3>
              <p>Service company</p>
              <ul>
                <li>
                  Developed UI from scratch using React-Redux which follows best
                  practices and standards
                </li>
                <li>Integrated GraphQL on the server side in Express</li>
                <li>
                  Worked in the Agile/Scrum development environment and actively
                  participated in scrum meetings
                </li>
                <li>Made chrome extension to read reports using React PWA</li>
              </ul>
            </div>
            <div className={`${styles.job} ${styles.linkites}`}>
              <h3>Senior Software Engineer at Linkites (May 16 - Jun 18)</h3>
              <p>Service company</p>
              <ul>
                <li>
                  Served as a Senior Fullstack Developer, accountable for
                  end-to-end development and deployment of software
                  applications.
                </li>
                <li>
                  Develop projects from scratch and develop UI based on Figma
                  mockup provided by client.
                </li>
                <li>Worked on GraphQL based projects.</li>
                <li>Design app schema architecture for MongoDB.</li>
                <li>Deployed app on AWS/ Digital ocean.</li>
                <li>Setting up customize SSL on server.</li>
                <li>
                  Collaborate with product management and engineering to define
                  and implement innovative solutions for the product direction,
                  visuals, and experience.
                </li>
              </ul>
            </div>
            <div className={`${styles.job} ${styles.yuvasoft}`}>
              <h3>Software Engineer at Yuvasoft (Apr 14 - Apr 16)</h3>
              <p>Service company</p>
              <ul>
                <li>
                  Designed, implemented, and maintained server-side operations
                  as a Backend Engineer using the MERN stack (MongoDB,
                  Express.js, React.js, Node.js).
                </li>
                <li>
                  Responsible for server-side components in web applications.
                </li>
                <li>Make APIs using Node.js for server side.</li>
                <li>Design schema ER diagrams for projects.</li>
                <li>Developed APIs with Sentry and Swagger.</li>
                <li>Oversaw UI development.</li>
              </ul>
            </div>
          </div>
          <div className={styles.section}>
            <h2>Education</h2>
            <ul>
              <li>Bachelor Of Engineering</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
