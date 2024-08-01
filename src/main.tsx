import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageContainer from "./components/PageContainer";
import OnGovernmentLanguage from "./pages/1OnGovernmentLanguage";
import EssaysPage from "./pages/EssaysPage";
import NotFoundPage from "./pages/NotFoundPage";
import RootPage from "./pages/RootPage";
import ROUTES from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.root} element={<PageContainer />}>
          <Route index element={<RootPage />} />
          <Route path={ROUTES.essays} element={<EssaysPage />} />
          <Route path={ROUTES.essay1} element={<OnGovernmentLanguage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
