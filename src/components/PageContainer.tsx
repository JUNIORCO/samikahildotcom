import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Section from "./Section";

const PageContainer = () => {
	enum Themes {
		light = "light",
		dark = "dark",
	}
	const themeKey = "theme";
	const initialTheme = localStorage.getItem(themeKey) === Themes.dark;
	const [isDarkMode, setIsDarkMode] = useState<boolean>(initialTheme);

	const handleThemeSwitch = () => {
		setIsDarkMode((prev) => !prev);
	};

	const onMount = () => {
		const savedTheme = localStorage.getItem(themeKey);
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;

		if (savedTheme === Themes.dark || (!savedTheme && prefersDark)) {
			setIsDarkMode(true);
		}
	};
	useEffect(onMount, []);

	const onThemeChange = () => {
		if (isDarkMode) {
			document.documentElement.classList.add(Themes.dark);
		} else {
			document.documentElement.classList.remove(Themes.dark);
		}

		localStorage.setItem(themeKey, isDarkMode ? Themes.dark : Themes.light);
	};
	useEffect(onThemeChange, [isDarkMode]);

	return (
		<div className="flex justify-center">
			<div className="w-[42em] my-8 mx-4 justify-center items-center">
				<Outlet />
				<Section title="Links" containerClassName="mt-6">
					<a href="mailto:sami.juniorco@gmail.com" className="w-fit">
						Email
					</a>
					<a
						href="https://twitter.com/samijrco"
						target="_blank"
						rel="noreferrer"
						className="w-fit"
					>
						X
					</a>
					<a
						href="https://github.com/JUNIORCO"
						target="_blank"
						rel="noreferrer"
						className="w-fit"
					>
						GitHub
					</a>
					<a
						href="https://linkedin.com/in/JUNIORCO"
						target="_blank"
						rel="noreferrer"
						className="w-fit"
					>
						LinkedIn
					</a>
				</Section>
				<button
					type="button"
					onClick={handleThemeSwitch}
					className="w-fit mt-6"
				>
					{isDarkMode ? "Light" : "Dark"} Mode
				</button>
			</div>
		</div>
	);
};

export default PageContainer;
