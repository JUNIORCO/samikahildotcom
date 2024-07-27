import { Link } from "react-router-dom";
import ROUTES from "../../routes";
import RootSection from "./RootSection";

function RootPage() {
	return (
		<div className="flex justify-center">
			<main className="max-w-[42em] my-8 mx-4 justify-center items-center">
				<p className="text-lg font-medium">Sami Junior Kahil</p>
				<div className="flex flex-col bg-white m-auto p-auto gap-6">
					<RootSection title="Bio">
						<div>
							<p>2024</p>
							<ul className="ml-4">
								<li>
									Cofounder{" "}
									<a
										href="https://www.montelo.ai/"
										target="_blank"
										rel="noreferrer"
									>
										MonteloAI
									</a>
									, almost got into YC
								</li>
							</ul>
						</div>
						<div>
							<p>2023</p>
							<ul className="ml-4">
								<li>
									Founding Engineer at{" "}
									<a
										href="https://nenlabs.xyz/"
										target="_blank"
										rel="noreferrer"
									>
										Nen Labs
									</a>{" "}
									building{" "}
									<a
										href="https://www.lasso.gg/"
										target="_blank"
										rel="noreferrer"
									>
										Lasso
									</a>{" "}
									&{" "}
									<a
										href="https://rhinestone.ai/"
										target="_blank"
										rel="noreferrer"
									>
										Rhinestone
									</a>{" "}
								</li>
							</ul>
						</div>
						<div>
							<p>2022 & before</p>
							<ul className="ml-4">
								<li>
									SWE at{" "}
									<a
										href="https://www.clutch.ca/"
										target="_blank"
										rel="noreferrer"
									>
										Clutch
									</a>{" "}
									doing ML for used car prices
								</li>
								<li>
									Graduated from{" "}
									<a
										href="https://www.mcgill.ca/"
										target="_blank"
										rel="noreferrer"
									>
										McGill
									</a>{" "}
									with a degree in Software Engineering, 2022
								</li>
								<li>Tried a startup in my senior year</li>
								<li>
									Intern at{" "}
									<a href="https://ssense.com" target="_blank" rel="noreferrer">
										SSENSE
									</a>
									, 2021
								</li>
								<li>
									Intern at{" "}
									<a
										href="https://www.facebook.com/cookiestruct/"
										target="_blank"
										rel="noreferrer"
									>
										Cookiestruct
									</a>
									, 2020
								</li>
								<li>Graduated high school with IB diploma, 2018</li>
							</ul>
						</div>
					</RootSection>
					<RootSection title="Essays">
						<div>
							<ul className="ml-4 mb-1">
								<li>
									<a href="https://www.montelo.ai/">Essay 1</a>
								</li>
								<li>
									<a href="https://www.montelo.ai/">Essay 2</a>
								</li>
								<li>
									<a href="https://www.montelo.ai/">Essay 3</a>
								</li>
							</ul>
							<Link to={ROUTES.essays}>View all</Link>
						</div>
					</RootSection>
					<RootSection title="Links">
						<a href="mailto:sami.juniorco@gmail.com">Email</a>
						<a
							href="https://twitter.com/samijrco"
							target="_blank"
							rel="noreferrer"
						>
							X
						</a>
						<a
							href="https://github.com/JUNIORCO"
							target="_blank"
							rel="noreferrer"
						>
							GitHub
						</a>
						<a
							href="https://linkedin.com/in/JUNIORCO"
							target="_blank"
							rel="noreferrer"
						>
							LinkedIn
						</a>
					</RootSection>
				</div>
			</main>
		</div>
	);
}

export default RootPage;
