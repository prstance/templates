import { createStore } from "solid-js/store";
import { AuthStore } from "~/types";

const [authStore, setAuthStore] = createStore<AuthStore>({
  isAuthenticated: false,
  authTokens: null,
  decodedJWT: null,
  user: null
});

const clearData = () => {
  setAuthStore({
    isAuthenticated: false,
    authTokens: null,
    decodedJWT: null,
    user: null
  });
  window.clear();
};

export { authStore, setAuthStore, clearData};
