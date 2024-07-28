import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ROUTES from "../routes";

function NotFoundPage() {
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
      <p>Page not found.</p>
    </React.Fragment>
  );
}

export default NotFoundPage;
