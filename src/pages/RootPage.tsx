import { Link } from "react-router-dom";
import Section from "../components/Section";
import ROUTES from "../routes";

function RootPage() {
  return (
    <div className="flex flex-col m-auto p-auto gap-6">
      <Section title="Bio">
        <div>
          <p>2024</p>
          <ul className="ml-4">
            <li>
              Cofounder{" "}
              <a
                href="https://www.montelo.ai/"
                target="_blank"
                rel="noreferrer"
              >
                MonteloAI
              </a>{" "}
              and{" "}
              <a
                href="https://getpeachpod.com/"
                target="_blank"
                rel="noreferrer"
              >
                Peach
              </a>
            </li>
            <li>Applied twice to YC, interviewed twice, failed twice</li>
          </ul>
        </div>
        <div>
          <p>2023</p>
          <ul className="ml-4">
            <li>
              Founding Engineer at{" "}
              <a href="https://nenlabs.xyz/" target="_blank" rel="noreferrer">
                Nen Labs
              </a>{" "}
              building{" "}
              <a href="https://www.lasso.gg/" target="_blank" rel="noreferrer">
                Lasso
              </a>{" "}
              &{" "}
              <a href="https://rhinestone.ai/" target="_blank" rel="noreferrer">
                Rhinestone
              </a>{" "}
            </li>
          </ul>
        </div>
        <div>
          <p>2022</p>
          <ul className="ml-4">
            <li>
              Software Engineer at{" "}
              <a href="https://www.clutch.ca/" target="_blank" rel="noreferrer">
                Clutch
              </a>{" "}
              doing ML for used car prices
            </li>
            <li>
              Graduated from{" "}
              <a href="https://www.mcgill.ca/" target="_blank" rel="noreferrer">
                McGill
              </a>{" "}
              with a degree in Software Engineering, 2022
            </li>
          </ul>
        </div>
        <details>
          <summary className="w-fit">2021 & before</summary>
          <ul className="ml-4">
            <li>Tried a startup in my senior year</li>
            <li>
              Intern at{" "}
              <a href="https://ssense.com" target="_blank" rel="noreferrer">
                SSENSE
              </a>
              , 2021
            </li>
            <li>
              Intern at{" "}
              <a
                href="https://www.facebook.com/cookiestruct/"
                target="_blank"
                rel="noreferrer"
              >
                Cookiestruct
              </a>
              , 2020
            </li>
            <li>Graduated high school with IB diploma, 2018</li>
          </ul>
        </details>
      </Section>
      <Section title="Essays">
        <div>
          <ul className="ml-4 mb-1">
            <li>
              <Link to={ROUTES.essay1}>On Tradition</Link>
            </li>
          </ul>
          <Link to={ROUTES.essays}>View all</Link>
        </div>
      </Section>
    </div>
  );
}

export default RootPage;
