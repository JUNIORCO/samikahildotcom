import { useEffect } from "react";

function useDocumentMeta(title: string, description: string) {
  useEffect(() => {
    // Update the document title
    document.title = title;

    // Find the description meta tag
    let metaDescription = document.querySelector('meta[name="description"]');

    // If it doesn't exist, create it
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    // Set the description content
    metaDescription.setAttribute("content", description);

    // Cleanup function
    return () => {
      document.title = "My React App"; // Default title
      metaDescription.setAttribute("content", ""); // Clear description
    };
  }, [title, description]);
}

export default useDocumentMeta;
