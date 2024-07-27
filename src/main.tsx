import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EssaysPage from "./pages/essays/EssaysPage.tsx";
import RootPage from "./pages/root/RootPage.tsx";
import ROUTES from "./routes.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<RootPage />} />
					<Route path={ROUTES.essays} element={<EssaysPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
);
