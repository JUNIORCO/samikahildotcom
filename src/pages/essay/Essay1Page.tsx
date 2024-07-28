import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
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
      <Section title="Title of Essay 1" subtitle="Date" dividerClassName="w-32">
        <p>Essay 1 content</p>
      </Section>
    </React.Fragment>
  );
}

export default Essay1Page;
