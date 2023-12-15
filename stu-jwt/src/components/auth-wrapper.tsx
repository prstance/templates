import { createStorage } from "@solid-primitives/storage";
import { ParentComponent, createEffect, createSignal, on, onMount } from "solid-js";
import { authStore, clearData, setAuthStore } from "~/stores/auth";
import { AuthTokens, DecodedJWT } from "~/types";
import { jwtDecode } from "jwt-decode";
import { fetchData, getUser } from "~/stores/api";

declare global {
  interface Window { clear: () => void; login: (authTokens: AuthTokens) => void }
}

const AuthWrapper: ParentComponent = props => {
  const [authStorage, setAuthStorage, { clear }] = createStorage({ api: localStorage, prefix: "user", serializer: (value: object) => JSON.stringify(value), deserializer: (value: string) => JSON.parse(value)});

  const login = (authTokens: AuthTokens) => {
    setAuthStorage("auth", authTokens);
  };

  onMount(() => {
    window.clear = clear;
    window.login = login;
  });

  createEffect(on(() => authStorage.auth, async () => {
    setAuthStore({authTokens: (authStorage.auth as AuthTokens)});
    if (!authStore.authTokens?.access) {
      clearData();
    }
    else {
      console.log("Access Token found");
      const accessToken = String(authStore.authTokens?.access);
      const refreshToken = String(authStore.authTokens?.refresh);
      const response = await getUser(accessToken, refreshToken);
      if (response.status !== "ok") {
        clearData();
      }
      else {
        const decodedJWT: DecodedJWT = jwtDecode(accessToken);
        setAuthStore({isAuthenticated: true, user: response.data, decodedJWT: decodedJWT});
      }
    }
  }));

  const [canGetData, setCanGetData] = createSignal(false);

  createEffect(on(() => authStore.isAuthenticated, () => {
    if (authStore.isAuthenticated && canGetData() !== true) {
      setCanGetData(true);
    }
  }));

  createEffect(on(() => canGetData(), async () => {
    if (canGetData()) {
      const accessToken = String(authStore.authTokens?.access);
      await fetchData(accessToken);
    }
  }));

  return (
    <>
      {props.children}
    </>
  );
};

export default AuthWrapper;