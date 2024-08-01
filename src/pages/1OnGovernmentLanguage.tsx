import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Section from "../components/Section";
import useDocumentMeta from "../hooks/useDocumentMeta";
import ROUTES from "../routes";

function OnGovernmentLanguage() {
  const title = "On Government Language ";
  useDocumentMeta(
    title,
    "It should be no surprise that governments intentionally use complicated, obfuscated language to mask their intentions and confuse the public.",
  );

  return (
    <React.Fragment>
      <Breadcrumb
        links={[
          {
            label: "Home",
            to: ROUTES.root,
          },
          {
            label: "Essays",
            to: ROUTES.essays,
          },
        ]}
      />
      <Section title={title} subtitle="July 31, 2024" dividerClassName="mb-8">
        <p>
          It should be no surprise that governments intentionally use
          complicated, obfuscated language to mask their intentions and confuse
          the public.
        </p>
        <br />
        <p>
          The Canadian government has a{" "}
          <a
            href="https://www.canada.ca/en/canadian-heritage/services/protocol-guidelines-special-event/styles-address.html"
            target="_blank"
            rel="noreferrer"
          >
            page
          </a>{" "}
          that describes the appropriate way to use formal and honorific titles
          to address the royal family and government dignitaries. How foolish of
          us to accept that a king must be referred to as majesty, a prince as
          royal highness, or a dignitary as excellency. These titles have no
          practical purpose, other than to reinforce the hierarchy. It separates
          them from us. With words, they're no longer ordinary people.
        </p>
        <br />
        <p>
          These titles inflate egos and deflate accountability. When a
          government official is addressed as “your excellency” or “the
          honourable”, they've been granted the accolade before earning it. Why
          strive for excellence or honour when the title itself implies you've
          already achieved it?
        </p>
        <br />
        <p>
          In a truly egalitarian society, honourifics would be see as a archaic
          remnants of a less enlightened time.
        </p>
      </Section>
    </React.Fragment>
  );
}

export default OnGovernmentLanguage;
