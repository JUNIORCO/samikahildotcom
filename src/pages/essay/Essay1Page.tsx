import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Quote from "../../components/Quote";
import Section from "../../components/Section";
import ROUTES from "../../routes";

function Essay1Page() {
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
      <Section
        title="Tradition & Government"
        subtitle="July 28, 2024"
        dividerClassName="w-52 mb-8"
      >
        <Quote
          text="I must once for all seriously undertake to rid myself of all the opinions in which I had formerly accepted, and commence to build anew from the foundation, if I wanted to establish any firm and permanent structure in the sciences."
          author="Descartes"
          source="Meditations on First Philosophy"
          year={1641}
        />
        <p>
          It is now some years since I read Descartes&apos; Meditations, and
          despite that I can still remember its meaning. I can&apos;t say the
          same for a lot of other books. Meditations is written so well, so
          simple, that I believe anyone of elementary reading comprehension must
          give it a thorough read.
        </p>
        <br />
        <p>
          I believe it is in this book that someone outlined how to use doubt as
          a foundation to rebuild knowledge; this is very similar to the “first
          principles” that is growing popular amongst the tech crowd today.
        </p>
      </Section>
    </React.Fragment>
  );
}

export default Essay1Page;
