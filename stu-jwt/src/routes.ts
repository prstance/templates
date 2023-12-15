import type { RouteDefinition } from "@solidjs/router";

import Home from "./pages/home";
import Protected from "./pages/protected";
import Login from "./pages/login";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/protected",
    component: Protected,
  },
  {
    path: "/login",
    component: Login,
  }
];
