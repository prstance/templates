import { Navigate } from "@solidjs/router";
import { Match, ParentComponent, Switch } from "solid-js";
import { authStore } from "~/stores/auth";

const AuthPage: ParentComponent<{protected?: boolean, unauthenticated?: boolean}> = props => {
  return (
    <Switch fallback={
      <>
        {props.children}
      </>
    }>
      <Match when={props.protected && !authStore.isAuthenticated}>
        <Navigate href="/login"/>
      </Match>
      <Match when={props.unauthenticated && authStore.isAuthenticated}>
        <Navigate href="/protected"/>
      </Match>
    </Switch>
  );
};

export default AuthPage;