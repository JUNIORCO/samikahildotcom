import type { ComponentProps, FC, ReactNode } from "react";

const Section: FC<{
  title: string;
  subtitle?: string;
  containerClassName?: ComponentProps<"div">["className"];
  dividerClassName?: ComponentProps<"div">["className"];
  children: ReactNode;
}> = ({ title, subtitle, containerClassName, dividerClassName, children }) => {
  return (
    <div className={`flex flex-col ${containerClassName ?? ""}`}>
      <div className="flex justify-between">
        <p className="font-medium text-lg">{title}</p>
        <p>{subtitle}</p>
      </div>
      <hr
        className={`border-t-4 border-stone-300 dark:border-stone-500 mb-2 w-20 ${dividerClassName ?? ""}`}
      />
      {children}
    </div>
  );
};

export default Section;
