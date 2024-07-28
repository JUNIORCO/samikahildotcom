import React, { type FC } from "react";
import { Link } from "react-router-dom";

type BreadcrumbLink = {
	label: string;
	to: string;
};

const Breadcrumb: FC<{
	links: BreadcrumbLink[];
}> = ({ links }) => {
	return (
		<div className="flex gap-2 mb-2">
			{links.map((link, index) => (
				<React.Fragment key={link.label}>
					{index > 0 && <p>/</p>}
					<Link to={link.to}>{link.label}</Link>
				</React.Fragment>
			))}
		</div>
	);
};

export default Breadcrumb;
