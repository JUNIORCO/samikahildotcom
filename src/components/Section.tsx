import type { ComponentProps, FC, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

const Section: FC<{
  title: string;
  subtitle?: string;
  containerClassName?: ComponentProps<"div">["className"];
  dividerClassName?: ComponentProps<"div">["className"];
  children: ReactNode;
}> = ({ title, subtitle, containerClassName, dividerClassName, children }) => {
  const titleRef = useRef<HTMLParagraphElement>(null);
  const [dividerWidth, setDividerWidth] = useState<number>(20);

  const getDividerWidthClass = (width: number) => {
    if (width <= 80) return "w-20";
    if (width <= 96) return "w-24";
    if (width <= 128) return "w-32";
    if (width <= 160) return "w-40";
    if (width <= 192) return "w-48";
    if (width <= 224) return "w-56";
    if (width <= 256) return "w-64";
    if (width <= 288) return "w-72";
    if (width <= 320) return "w-80";
    return "w-96";
  };

  useEffect(() => {
    if (titleRef.current) {
      const titleWidth = titleRef.current.offsetWidth;
      setDividerWidth(Math.max(titleWidth, 80));
    }
  }, []);

  return (
    <div className={`flex flex-col ${containerClassName ?? ""}`}>
      <div className="flex justify-between">
        <p ref={titleRef} className="font-medium text-lg">
          {title}
        </p>
        <p>{subtitle}</p>
      </div>
      <hr
        className={`border-t-4 border-stone-300 dark:border-stone-500 mb-2 ${getDividerWidthClass(dividerWidth)} ${dividerClassName ?? ""}`}
      />
      {children}
    </div>
  );
};

export default Section;
