import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.ts";
import ResetStyles from "./styles/resets.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={{ theme }}>
      <ResetStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
