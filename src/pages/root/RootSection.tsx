import type { FC, ReactNode } from "react";

const RootSection: FC<{
	title: string;
	children: ReactNode;
}> = ({ title, children }) => {
	return (
		<div className="flex flex-col">
			<h1 className="font-medium text-lg">{title}</h1>
			<hr className="border-t-4 border-gray-300 mb-2 w-20" />
			{children}
		</div>
	);
};

export default RootSection;
