import type { FC, ReactNode } from "react";
import Header from "./Header";

const AppContainer: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div
			id="app-container"
			className="w-screen h-screen flex flex-col sm:py-12 sm:px-16 px-4 py-8 gap-8"
		>
			<Header />
			{children}
		</div>
	);
};

export default AppContainer;
