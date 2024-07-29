import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import useDocumentMeta from "../hooks/useDocumentMeta";
import ROUTES from "../routes";

function NotFoundPage() {
  useDocumentMeta("Sami Junior Kahil", "404 Not Found.");

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
