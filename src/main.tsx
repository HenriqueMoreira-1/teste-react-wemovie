import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyle } from "./GlobalStyle.ts";
import Providers from "./providers/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
        <GlobalStyle />
        <App />
    </Providers>
  </React.StrictMode>
);
