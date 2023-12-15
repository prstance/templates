/* @refresh reload */
import "~/styles/globals.css";
import "~/styles/reset.css";
import "virtual:uno.css";
import { render } from "solid-js/web";
import { A, Router, useRoutes } from "@solidjs/router";
import { routes } from "./routes";
import AuthWrapper from "./components/auth-wrapper";


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
        <AuthWrapper>
          <ul class="flex">
            <li><A href="/">Home</A></li>
            <li class="ml-4"><A href="/protected">Protected</A></li>
          </ul>
          <Route />
        </AuthWrapper>
      </Router>
    );
  },
  root,
);
