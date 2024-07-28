import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageContainer from "./components/PageContainer";
import Essay1Page from "./pages/essay/Essay1Page";
import EssaysPage from "./pages/essays/EssaysPage";
import RootPage from "./pages/root/RootPage";
import ROUTES from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.root} element={<PageContainer />}>
          <Route index element={<RootPage />} />
          <Route path={ROUTES.essays} element={<EssaysPage />} />
          <Route path={ROUTES.essay1} element={<Essay1Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
