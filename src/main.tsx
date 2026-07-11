import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Template from "./template";
import data from "../public/portfolio-data.json";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Template portfolioData={data} />
  </StrictMode>,
);