interface InlineLinkProps {
  url: string;
  display: string;
  hideUnderline?: boolean;
}

const InlineLink: React.FC<InlineLinkProps> = ({
  url,
  display,
  hideUnderline = false,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors duration-200 ${
        hideUnderline ? "no-underline" : "underline"
      }`}
    >
      {display}
    </a>
  );
};

export default InlineLink;
