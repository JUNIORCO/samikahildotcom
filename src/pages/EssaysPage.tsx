import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Section from "../components/Section";
import ROUTES from "../routes";

function EssaysPage() {
  return (
    <React.Fragment>
      <Breadcrumb
        links={[
          {
            label: "Home",
            to: ROUTES.root,
          },
        ]}
      />
      <Section title="Essays">
        <ul className="ml-4 mb-1">
          <li>
            <Link to={ROUTES.essay1}>On Tradition</Link>
          </li>
        </ul>
      </Section>
    </React.Fragment>
  );
}

export default EssaysPage;
