import { useEffect } from "react";

function useDocumentMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement("meta") as HTMLMetaElement;
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);

    return () => {
      document.title = "My React App";
      metaDescription.setAttribute("content", "");
    };
  }, [title, description]);
}

export default useDocumentMeta;
