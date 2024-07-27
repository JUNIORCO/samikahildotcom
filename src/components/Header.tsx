import { SwatchBook } from "lucide-react";
import type { FC } from "react";
import { GitHubIcon, LinkedInIcon, XIcon } from "../icons";

const Header: FC = () => {
	const IconClassName = "w-8 h-8 sm:w-10 sm:h-10";

	return (
		<header
			id="header"
			className="sticky top-0 z-50 bg-neutral-50 sm:w-[50%] w-full sm:h-24 h-16 shadow-md rounded-full content-center self-center"
		>
			<div className="py-4 px-6 flex justify-center gap-8 sm:gap-16 items-center">
				<GitHubIcon className={IconClassName} />
				<XIcon className={IconClassName} />
				<LinkedInIcon className={IconClassName} />
				<SwatchBook className={IconClassName} />
			</div>
		</header>
	);
};

export default Header;
