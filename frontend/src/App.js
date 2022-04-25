import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import About from "./components/About";
import Contact from "./components/Contact";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";

function App() {
  const [listOfProjects, setListOfProjects] = useState([]); // example of pre-populating ([{ id: 1, name: "Pedro", age: 20, username: "pedro123" }]);
  const [name, setName] = useState("");
  const [theme, setTheme] = useState("");
  const [subtheme, setSubtheme] = useState("");

  const [listOfAnswers, setListOfAnswers] = useState([]);
  const [Q0, setQ0] = useState("");
  const [Q1, setQ1] = useState("");
  const [Q2, setQ2] = useState("");
  const [Q3, setQ3] = useState("");
  const [Q4, setQ4] = useState("");
  const [Q5, setQ5] = useState("");
  const [Q6, setQ6] = useState("");
  const [Q7, setQ7] = useState("");
  const [Q8, setQ8] = useState("");
  const [Q9, setQ9] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3002/getProjects").then((response) => {
      setListOfProjects(response.data);
    });
  }, []);

  const createAnswer = (ev) => {
    ev.preventDefault();
    document.forms[0].reset(); //Resets the forms to prepare for the next response
    Axios.post("http://localhost:3002/createAnswer", {
      name, //similar to writing name = name;
      Q0,
      Q1,
      Q2,
      Q3,
      Q4,
      Q5,
      Q6,
      Q7,
      Q8,
      Q9,
    }).then((response) => {
      setListOfAnswers([
        ...listOfAnswers, //This updates the listOfUsers to whatever it was ([...listOfUsers]), + whatever was added.
        {
          name, //similar to writing name = name;
          Q0,
          Q1,
          Q2,
          Q3,
          Q4,
          Q5,
          Q6,
          Q7,
          Q8,
          Q9,
        },
      ]);
    });
    setQ0("");
    setQ1("");
    setQ2("");
    setQ3("");
    setQ4("");
    setQ5("");
    setQ6("");
    setQ7("");
    setQ8("");
    setQ9("");
  };

  return (
    <div className="App">
      <Navbar />

      <a id="welcome"></a>
      <Welcome />

      <a id="about"></a>
      <About />

      <a id="projects"></a>
      <div class="pageSize">
        <h1>Projects</h1>
        <ul>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h3>
        </ul>
        <div>
          <div class="projectDisplay">
            {listOfProjects.map((project) => {
              return (
                <div class="projectplacement">
                  <div class="project">
                    <h4>{project.name}</h4>
                    <h5>{project.theme}</h5>
                    <h5>{project.subtheme}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <a id="sus"></a>
      <div class="pageSize">
        <h1 id="Name">Questionnaire</h1>
        <ul>
          <h3>
            Oh, and I implemented the System Usability Scale questionnaire for
            the 6th semester project. We did however end up using Google Forms
            instead. The response will be visible in the database after
            responding, and all values are reset between responses (Or well...
            set to the string "Invalid" anyways).
          </h3>
        </ul>
        <div class="sus">
          <h1 class="likert-header">System Usability Scale</h1>
          <form action="">
            <label class="statement">
              Please input your first- and last name in the box below:
            </label>
            <input
              class="sus-name"
              type="text"
              placeholder="Name..."
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <label class="statement">
              I think that I would like to use this system frequently
            </label>
            <ul class="likert">
              <li>
                <input
                  type="radio"
                  value="1"
                  name="Q0"
                  onChange={(event) => {
                    setQ0(event.target.value);
                  }}
                />
                <label>Strongly disagree</label>
              </li>
              <li>
                <input
                  type="radio"
                  value="2"
                  name="Q0"
                  onChange={(event) => {
                    setQ0(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="3"
                  name="Q0"
                  onChange={(event) => {
                    setQ0(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="4"
                  name="Q0"
                  onChange={(event) => {
                    setQ0(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="5"
                  name="Q0"
                  onChange={(event) => {
                    setQ0(event.target.value);
                  }}
                />
                <label>Strongly agree</label>
              </li>
            </ul>
            <label class="statement">
              I found the system unnecessarily complex
            </label>
            <ul class="likert">
              <li>
                <input
                  type="radio"
                  value="1"
                  name="Q1"
                  onChange={(event) => {
                    setQ1(event.target.value);
                  }}
                />
                <label>Strongly disagree</label>
              </li>
              <li>
                <input
                  type="radio"
                  value="2"
                  name="Q1"
                  onChange={(event) => {
                    setQ1(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="3"
                  name="Q1"
                  onChange={(event) => {
                    setQ1(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="4"
                  name="Q1"
                  onChange={(event) => {
                    setQ1(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="5"
                  name="Q1"
                  onChange={(event) => {
                    setQ1(event.target.value);
                  }}
                />
                <label>Strongly agree</label>
              </li>
            </ul>
            <label class="statement">
              I thought the system was easy to use
            </label>
            <ul class="likert">
              <li>
                <input
                  type="radio"
                  value="1"
                  name="Q2"
                  onChange={(event) => {
                    setQ2(event.target.value);
                  }}
                />
                <label>Strongly disagree</label>
              </li>
              <li>
                <input
                  type="radio"
                  value="2"
                  name="Q2"
                  onChange={(event) => {
                    setQ2(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="3"
                  name="Q2"
                  onChange={(event) => {
                    setQ2(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="4"
                  name="Q2"
                  onChange={(event) => {
                    setQ2(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="5"
                  name="Q2"
                  onChange={(event) => {
                    setQ2(event.target.value);
                  }}
                />
                <label>Strongly agree</label>
              </li>
            </ul>
            <label class="statement">
              I think that I would need the support of a technical person to be
              able to use this system
            </label>
            <ul class="likert">
              <li>
                <input
                  type="radio"
                  value="1"
                  name="Q3"
                  onChange={(event) => {
                    setQ3(event.target.value);
                  }}
                />
                <label>Strongly disagree</label>
              </li>
              <li>
                <input
                  type="radio"
                  value="2"
                  name="Q3"
                  onChange={(event) => {
                    setQ3(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="3"
                  name="Q3"
                  onChange={(event) => {
                    setQ3(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="4"
                  name="Q3"
                  onChange={(event) => {
                    setQ3(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="5"
                  name="Q3"
                  onChange={(event) => {
                    setQ3(event.target.value);
                  }}
                />
                <label>Strongly agree</label>
              </li>
            </ul>
            <label class="statement">
              I found the various functions in this system were well integrated
            </label>
            <ul class="likert">
              <li>
                <input
                  type="radio"
                  value="1"
                  name="Q4"
                  onChange={(event) => {
                    setQ4(event.target.value);
                  }}
                />
                <label>Strongly disagree</label>
              </li>
              <li>
                <input
                  type="radio"
                  value="2"
                  name="Q4"
                  onChange={(event) => {
                    setQ4(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="3"
                  name="Q4"
                  onChange={(event) => {
                    setQ4(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="4"
                  name="Q4"
                  onChange={(event) => {
                    setQ4(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="5"
                  name="Q4"
                  onChange={(event) => {
                    setQ4(event.target.value);
                  }}
                />
                <label>Strongly agree</label>
              </li>
            </ul>
            <label class="statement">
              I thought there was too much inconsistency in this system
            </label>
            <ul class="likert">
              <li>
                <input
                  type="radio"
                  value="1"
                  name="Q5"
                  onChange={(event) => {
                    setQ5(event.target.value);
                  }}
                />
                <label>Strongly disagree</label>
              </li>
              <li>
                <input
                  type="radio"
                  value="2"
                  name="Q5"
                  onChange={(event) => {
                    setQ5(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="3"
                  name="Q5"
                  onChange={(event) => {
                    setQ5(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="4"
                  name="Q5"
                  onChange={(event) => {
                    setQ5(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="5"
                  name="Q5"
                  onChange={(event) => {
                    setQ5(event.target.value);
                  }}
                />
                <label>Strongly agree</label>
              </li>
            </ul>
            <label class="statement">
              I would imagine that most people would learn to use this system
              very quickly
            </label>
            <ul class="likert">
              <li>
                <input
                  type="radio"
                  value="1"
                  name="Q6"
                  onChange={(event) => {
                    setQ6(event.target.value);
                  }}
                />
                <label>Strongly disagree</label>
              </li>
              <li>
                <input
                  type="radio"
                  value="2"
                  name="Q6"
                  onChange={(event) => {
                    setQ6(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="3"
                  name="Q6"
                  onChange={(event) => {
                    setQ6(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="4"
                  name="Q6"
                  onChange={(event) => {
                    setQ6(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="5"
                  name="Q6"
                  onChange={(event) => {
                    setQ6(event.target.value);
                  }}
                />
                <label>Strongly agree</label>
              </li>
            </ul>
            <label class="statement">
              I found the system very cumbersome to use
            </label>
            <ul class="likert">
              <li>
                <input
                  type="radio"
                  value="1"
                  name="Q7"
                  onChange={(event) => {
                    setQ7(event.target.value);
                  }}
                />
                <label>Strongly disagree</label>
              </li>
              <li>
                <input
                  type="radio"
                  value="2"
                  name="Q7"
                  onChange={(event) => {
                    setQ7(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="3"
                  name="Q7"
                  onChange={(event) => {
                    setQ7(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="4"
                  name="Q7"
                  onChange={(event) => {
                    setQ7(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="5"
                  name="Q7"
                  onChange={(event) => {
                    setQ7(event.target.value);
                  }}
                />
                <label>Strongly agree</label>
              </li>
            </ul>
            <label class="statement">
              I felt very confident using the system
            </label>
            <ul class="likert">
              <li>
                <input
                  type="radio"
                  value="1"
                  name="Q8"
                  onChange={(event) => {
                    setQ8(event.target.value);
                  }}
                />
                <label>Strongly disagree</label>
              </li>
              <li>
                <input
                  type="radio"
                  value="2"
                  name="Q8"
                  onChange={(event) => {
                    setQ8(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="3"
                  name="Q8"
                  onChange={(event) => {
                    setQ8(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="4"
                  name="Q8"
                  onChange={(event) => {
                    setQ8(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="5"
                  name="Q8"
                  onChange={(event) => {
                    setQ8(event.target.value);
                  }}
                />
                <label>Strongly agree</label>
              </li>
            </ul>
            <label class="statement">
              I needed to learn a lot of things before I could get going with
              this system
            </label>
            <ul class="likert">
              <li>
                <input
                  type="radio"
                  value="1"
                  name="Q9"
                  onChange={(event) => {
                    setQ9(event.target.value);
                  }}
                />
                <label>Strongly disagree</label>
              </li>
              <li>
                <input
                  type="radio"
                  value="2"
                  name="Q9"
                  onChange={(event) => {
                    setQ9(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="3"
                  name="Q9"
                  onChange={(event) => {
                    setQ9(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="4"
                  name="Q9"
                  onChange={(event) => {
                    setQ9(event.target.value);
                  }}
                />
              </li>
              <li>
                <input
                  type="radio"
                  value="5"
                  name="Q9"
                  onChange={(event) => {
                    setQ9(event.target.value);
                  }}
                />
                <label>Strongly agree</label>
              </li>
            </ul>
            <button class="submit" onClick={createAnswer}>
              {" "}
              Send{" "}
            </button>
          </form>
        </div>
      </div>

      <a id="contact"></a>
      <Contact />

      <div w3-include-html="content.html"></div>
    </div>
  );
}

export default App;
