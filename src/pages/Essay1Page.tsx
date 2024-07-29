import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Footnote } from "../components/Footnote";
import { FootnoteReference } from "../components/FootnoteReference";
import Quote from "../components/Quote";
import Section from "../components/Section";
import useDocumentMeta from "../hooks/useDocumentMeta";
import ROUTES from "../routes";

function Essay1Page() {
  const title = "Government Language From First Principles";
  const descartesQuote =
    "I must once for all seriously undertake to rid myself of all the opinions in which I had formerly accepted, and commence to build anew from the foundation, if I wanted to establish any firm and permanent structure in the sciences.";
  useDocumentMeta(title, descartesQuote);

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
      <Section title={title} subtitle="July 28, 2024" dividerClassName="mb-8">
        <Quote
          text={descartesQuote}
          author="Descartes"
          source="Meditations on First Philosophy"
          year={1641}
        />
        <p>
          It is now some years since I read{" "}
          <span className="italic">Meditations on First Philosophy</span>, but
          the current trend of thinking in first principles - the practice of
          breaking down complex problems to their most fundamental truths - led
          me to revisit Descartes' work. In his book of short essays was the
          first attempt at systematically questioning and dismantling prior
          beliefs to rebuild knowledge from the ground up. That gives him a
          nomination for father of first principles thinking.
        </p>
        <br />
        <p>
          What's remarkable about Descartes, who was a religious man taught by
          jesuits, is that he wasn't intentionally developing this method to
          advance maths or science; he only did so to persuade skeptics that god
          exists, and the only way he believed he could do that was with natural
          reason. The advancement of other fields was, in essence, a byproduct
          of his faith. <FootnoteReference id="1" />
        </p>
        <br />
        <p>
          This essay is written more out of frustration from current political
          events than out of having a passion for faith; calculated evasions of
          accountability through carefully crafted misdirections, cynical
          exploitation of statistically negligible issues to divert attention
          from important matters, the systematic erosion of institutional checks
          and balances under the guise of necessary reform - I could go on and
          on.
        </p>
        <br />
        <br />
        <br />
        <p className="text-lg mb-2">Notes</p>
        <Footnote id="1">
          To give more detail to Descartes' beliefs, he certainly believed in
          the existence of a creator, but not necessarily the Christian god.
        </Footnote>
      </Section>
    </React.Fragment>
  );
}

export default Essay1Page;
