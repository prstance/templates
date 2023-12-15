/* @refresh reload */
import "~/styles/globals.css";
import "~/styles/reset.css";
import "virtual:uno.css";
import { render } from "solid-js/web";
import { Router, useRoutes } from "@solidjs/router";
import { routes } from "./routes";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(
  () => {
    const Route = useRoutes(routes);
    return (
      <Router>
        <Route />
      </Router>
    );
  },
  root,
);
