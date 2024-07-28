import type { ComponentProps, FC, ReactNode } from "react";

const Section: FC<{
	title: string;
	containerClassName?: ComponentProps<"div">["className"];
	dividerClassName?: ComponentProps<"div">["className"];
	children: ReactNode;
}> = ({ title, containerClassName, dividerClassName, children }) => {
	return (
		<div className={`flex flex-col ${containerClassName}`}>
			<p className="font-medium text-lg">{title}</p>
			<hr
				className={`border-t-4 border-gray-300 dark:border-gray-500 mb-2 w-20 ${dividerClassName}`}
			/>
			{children}
		</div>
	);
};

export default Section;
