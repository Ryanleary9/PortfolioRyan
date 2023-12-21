import "./App.css";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { Slide } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "@fontsource/readex-pro";
import Swal from "sweetalert2";

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm(
        "service_fggqzgr",
        "template_lavhqss",
        form.current,
        "hjGMinDeBfusUaE75"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    var allInputs = document.querySelectorAll("input");
    allInputs.forEach((singleInput) => (singleInput.value = ""));
    var resetMessage = document.querySelectorAll("textarea");
    resetMessage.forEach((singleInput) => (singleInput.value = ""));
    Swal.fire({
      title: "Message Sent!",
      icon: "success",
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <ul className="header">
          <li>
            <a href="#section2id" className="header-hl">
              About Me
            </a>
          </li>
          <li>
            <a href="#skillId" className="header-hl">
              Skill
            </a>
          </li>
          <li>
            <a href="#projects" className="header-hl">
              Projects
            </a>
          </li>
          <li>
            <a href="#myForm" className="header-hl">
              Contact Me
            </a>
          </li>
        </ul>
      </header>
      <span className="presection">
        <span className="section1">
          <span className="myself">
            <h1>Ryan Michael Leary Zafra</h1>
            <h3 className="position">Fullstack Developer</h3>
          </span>

          <img src="img/me.jpg" alt="" className="my-photo" />
        </span>

        <span className="presection2">
          <span className="section2">
            <Slide direction="left" triggerOnce={true}>
              <span className="aboutMe" id="section2id">
                <h2>About Me</h2>
                <span className="about-me">
                  <p>
                    Hey there! I'm Ryan, a 20-year-old software engineer who
                    graduated from ISDI Coders, ranked as the best bootcamp in
                    the world by SwitchUp. I'm not just a coder; I'm a
                    passionate worker dedicated to turning ideas into seamless,
                    innovative solutions. My journey in the world of programming
                    started early, and I thrive on challenges that push my
                    skills to new heights.
                  </p>
                </span>
              </span>
            </Slide>
            <Slide direction="left" triggerOnce={true}>
              <span className="ad-info">
                <h2>Aditional Info</h2>
                <span>
                  <ul className="aditional-info">
                    <li>Date of Birth: 09/03/2003</li>
                    <li>Nationality: English and Spanish</li>
                    <li>
                      Languages: English(Native), Spanish(Native),
                      Valenciano(Intermediate)
                    </li>
                  </ul>
                </span>
              </span>
            </Slide>
          </span>
          <Slide direction="right" triggerOnce={true}>
            <span className="hobbies">
              <h2>Hobbies</h2>
              <span className="hobbie-container">
                <img src="/img/viajes.PNG" alt="" className="hobbie" />
              </span>

              <span className="hobbie-container">
                <img src="/img/hiking.png" alt="" className="hobbie" />
              </span>
              <span className="hobbie-container">
                <img src="/img/cars.png" alt="" className="hobbie" />
              </span>
              <span className="hobbie-container">
                <img src="/img/read.png" alt="" className="hobbie" />
              </span>
            </span>
          </Slide>
        </span>
        <span className="skill-section">
          <h2 className="skill-title" id="skillId">
            Skills
          </h2>
          <span className="skill-container">
            <Slide direction="left" triggerOnce={true}>
              <span>
                <h3 className="skill-title">Frontend</h3>
                <span className="skills">
                  <span className="skill">
                    <img src="/img/react.png" alt="" className="skill-image" />
                    <p className="skill-name">React</p>
                  </span>
                  <span className="skill">
                    <img src="/img/redux.png" alt="" className="skill-image" />
                    <p className="skill-name">Redux</p>
                  </span>
                  <span className="skill">
                    <img src="/img/js.png" alt="" className="skill-image" />
                    <p className="skill-name">JavaScript</p>
                  </span>
                  <span className="skill">
                    <img
                      src="/img/typescript.svg"
                      alt=""
                      className="skill-image"
                    />
                    <p className="skill-name">TypeScript</p>
                  </span>
                  <span className="skill">
                    <img src="/img/sass.png" alt="" className="skill-image" />
                    <p className="skill-name">Sass</p>
                  </span>
                  <span className="skill">
                    <img src="/img/html.png" alt="" className="skill-image" />
                    <p className="skill-name">HTML</p>
                  </span>
                  <span className="skill">
                    <img src="/img/css.png" alt="" className="skill-image" />
                    <p className="skill-name">CSS</p>
                  </span>
                </span>
              </span>
            </Slide>
            <Slide direction="up" triggerOnce={true}>
              <span>
                <h3 className="skill-title">Backend</h3>
                <span className="skills">
                  <span className="skill">
                    <img src="/img/node.png" alt="" className="skill-image" />
                    <p className="skill-name">NodeJs</p>
                  </span>
                  <span className="skill">
                    <img src="/img/mongo.png" alt="" className="skill-image" />
                    <p className="skill-name">MongoDB</p>
                  </span>
                  <span className="skill">
                    <img
                      src="/img/Expressjs.png"
                      alt=""
                      className="skill-image"
                    />
                    <p className="skill-name">Express</p>
                  </span>
                  <span className="skill">
                    <img
                      src="/img/postman.png"
                      alt=""
                      className="skill-image"
                    />
                    <p className="skill-name">Postman</p>
                  </span>
                </span>
              </span>
            </Slide>
            <Slide direction="right" triggerOnce={true}>
              <span>
                <h3 className="skill-title">Other:</h3>
                <span className="skills">
                  <span className="skill">
                    <img src="/img/github.png" alt="" className="skill-image" />
                    <p className="skill-name">Github</p>
                  </span>
                  <span className="skill">
                    <img src="/img/git.png" alt="" className="skill-image" />
                    <p className="skill-name">Git</p>
                  </span>
                  <span className="skill">
                    <img
                      src="/img/netlify.png"
                      alt=""
                      className="skill-image"
                    />
                    <p className="skill-name">Netlify</p>
                  </span>
                  <span className="skill">
                    <img
                      src="/img/sonarcloud.png"
                      alt=""
                      className="skill-image"
                    />
                    <p className="skill-name">Sonarcloud</p>
                  </span>
                  <span className="skill">
                    <img src="/img/jest.png" alt="" className="skill-image" />
                    <p className="skill-name">Jest</p>
                  </span>
                  <span className="skill">
                    <img
                      src="/img/firebase.png"
                      alt=""
                      className="skill-image"
                    />
                    <p className="skill-name">Firebase</p>
                  </span>
                  <span className="skill">
                    <img src="/img/figma.png" alt="" className="skill-image" />
                    <p className="skill-name">Figma</p>
                  </span>
                </span>
              </span>
            </Slide>
          </span>
        </span>
        <span className="section3">
          <h2 className="projects-title" id="projects">
            Projects
          </h2>
          <ul className="projects-list">
            <Slide direction="up" triggerOnce={true}>
              <li className="projects-on-list" id="projects-scroll">
                <a href="https://bearbooks.netlify.app/">
                  <img
                    src="/img/bearbooksss.png"
                    alt=""
                    className="projectImages"
                  />
                </a>
                <h3 className="project-title">BearBooks</h3>
                <h4>Technologies Used</h4>
                <span className="technologies">
                  <img
                    src="/img/react.png"
                    alt="A react Icon"
                    className="tech-used"
                  />
                  <img src="/img/redux.png" alt="" className="tech-used" />
                  <img src="/img/typescript.svg" alt="" className="tech-used" />
                  <img src="/img/js.png" alt="" className="tech-used" />

                  <img
                    src="/img/sass.png"
                    alt="A sass Icon"
                    className="tech-used"
                  />
                  <img
                    src="/img/html.png"
                    alt="A html Icon"
                    className="tech-used"
                  />
                  <img
                    src="/img/css.png"
                    alt="A css Icon"
                    className="tech-used"
                  />
                </span>
                <span className="technologies">
                  <img src="/img/mongo.png" alt="" className="tech-used" />
                  <img src="/img/node.png" alt="" className="tech-used" />
                  <img src="/img/Expressjs.png" alt="" className="tech-used" />
                  <img
                    src="/img/github.png"
                    alt="A github Icon"
                    className="tech-used"
                  />
                  <img
                    src="/img/git.png"
                    alt="A git Icon"
                    className="tech-used"
                  />
                  <img
                    src="/img/postman.png"
                    alt="A postman Icon"
                    className="tech-used"
                  />
                </span>
                <span className="links">
                  <a href="https://bearbooks.netlify.app/">
                    <img
                      src="/img/netlify.png"
                      alt=""
                      className="project-links"
                    />
                  </a>
                  <a href="https://github.com/Ryanleary9/BearBooks_Front">
                    <img
                      src="/img/github.png"
                      alt=""
                      className="project-links"
                    />
                  </a>
                </span>
              </li>
            </Slide>
            <Slide direction="up" triggerOnce={true}>
              <li className="projects-on-list">
                <a href="https://pokedex-46u1t84px-ryans-projects-f87ddd02.vercel.app">
                  <img
                    src="/img/pokedax.png"
                    alt=""
                    className="projectImages"
                  />
                </a>
                <h3 className="project-title">Pokedax</h3>
                <h4>Technologies Used</h4>
                <span className="technologies">
                  <img
                    src="/img/react.png"
                    alt="A react Icon"
                    className="tech-used"
                  />

                  <img
                    src="/img/sass.png"
                    alt="A sass Icon"
                    className="tech-used"
                  />
                  <img
                    src="/img/html.png"
                    alt="A html Icon"
                    className="tech-used"
                  />
                  <img
                    src="/img/css.png"
                    alt="A css Icon"
                    className="tech-used"
                  />
                  <img
                    src="/img/github.png"
                    alt="A github Icon"
                    className="tech-used"
                  />
                  <img
                    src="/img/git.png"
                    alt="A git Icon"
                    className="tech-used"
                  />
                  <img
                    src="/img/postman.png"
                    alt="A postman Icon"
                    className="tech-used"
                  />
                </span>
                <span className="links2">
                  <a href="https://pokedex-46u1t84px-ryans-projects-f87ddd02.vercel.app/">
                    <img
                      src="/img/vercel.svg"
                      alt=""
                      className="project-links"
                    />
                  </a>
                  <a href="https://github.com/Ryanleary9/Pokedax">
                    <img
                      src="/img/github.png"
                      alt=""
                      className="project-links"
                    />
                  </a>
                </span>
              </li>
            </Slide>
          </ul>
        </span>
        <span className="section4">
          <h2 className="contact-title">Contact Me</h2>
          <span className="section4-data">
            <Slide direction="left" triggerOnce={true}>
              <span>
                <span className="contact-links">
                  <a
                    href="https://github.com/Ryanleary9"
                    className="contact-card"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="contact-images"
                    />
                    <p>My Github</p>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ryanlearyzafra/"
                    className="contact-card"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="contact-images"
                    />
                    <p>My Linkedin</p>
                  </a>
                  <a href="#myForm" className="contact-card">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="contact-images"
                    />
                    <p>+34 644 44 95 45</p>
                  </a>
                </span>
              </span>
            </Slide>
            <form ref={form} onSubmit={sendEmail} id="myForm">
              <span className="contact-form">
                <label>Name</label>
                <input type="text" name="user_name" className="contact-input" />
                <label>Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="contact-input"
                />
                <label>Message</label>
                <textarea name="message" className="message-input" />
                <input type="submit" value="Send" className="contact-send" />
              </span>
            </form>
          </span>
        </span>
      </span>
    </div>
  );
}

export default App;
