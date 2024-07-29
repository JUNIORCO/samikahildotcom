import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Section from "../components/Section";
import useDocumentMeta from "../hooks/useDocumentMeta";
import ROUTES from "../routes";

function EssaysPage() {
  useDocumentMeta("Essays", "A collection of essays.");

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
            <Link to={ROUTES.essay1}>
              Government Language From First Principles
            </Link>
          </li>
        </ul>
      </Section>
    </React.Fragment>
  );
}

export default EssaysPage;
