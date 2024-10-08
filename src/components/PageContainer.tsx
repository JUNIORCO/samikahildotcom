import { MathJaxContext } from "better-react-mathjax";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import theme from "tailwindcss/colors";
import Section from "./Section";

const PageContainer = () => {
  enum Themes {
    light = "light",
    dark = "dark",
  }
  const themeKey = "theme";
  const fontKey = "font";
  const initialTheme = localStorage.getItem(themeKey) === Themes.dark;
  const initialFont = localStorage.getItem(fontKey) || "Georgia";
  const [isDarkMode, setIsDarkMode] = useState<boolean>(initialTheme);

  const fonts = ["Georgia", "Times", "Arial", "Verdana"];
  const initialFontIndex = fonts.indexOf(initialFont);
  const [fontIndex, setFontIndex] = useState<number>(initialFontIndex);

  const handleThemeSwitch = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newFontIndex = fonts.indexOf(event.target.value);
    setFontIndex(newFontIndex);
    localStorage.setItem(fontKey, fonts[newFontIndex]);
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

    // for iOS background color
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute(
        "content",
        isDarkMode ? theme.stone[900] : theme.stone[100],
      );

    localStorage.setItem(themeKey, isDarkMode ? Themes.dark : Themes.light);
  };
  useEffect(onThemeChange, [isDarkMode]);

  useEffect(() => {
    document.documentElement.style.fontFamily = fonts[fontIndex];
  }, [fontIndex]);

  return (
    <MathJaxContext>
      <div className="flex justify-center">
        <div className="w-[42em] my-8 mx-4 justify-center items-center">
          <p className="text-lg font-medium mb-1 justify-end">
            Sami Junior Kahil
          </p>
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
          <div className="flex justify-between mt-6">
            <button type="button" onClick={handleThemeSwitch}>
              {isDarkMode ? "Light" : "Dark"} Mode
            </button>
            <p className="font-satisfy text-lg select-none">junior</p>
            <select value={fonts[fontIndex]} onChange={handleFontChange}>
              {fonts.map((font) => (
                <option key={font} value={font}>
                  {font}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </MathJaxContext>
  );
};

export default PageContainer;
