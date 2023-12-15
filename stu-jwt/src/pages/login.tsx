import { createSignal } from "solid-js";
import AuthPage from "~/components/auth-page";
import { getAuthTokens } from "~/stores/api";

export default function Login() {
  const [username, setUsername] = createSignal("Cwazy");
  const [password, setPassword] = createSignal("123");

  const handleLogin = async () => {
    const authTokens = await (await getAuthTokens(username(), password())).data;
    if (authTokens) window.login(authTokens);
    setUsername("");
    setPassword("");
  };

  return (
    <AuthPage unauthenticated>
      <h1>Page de connexion</h1>
      <input type="text" value={username()} onInput={e => setUsername(e.currentTarget.value)} placeholder="username" />
      <input type="password" value={password()} onInput={e => setPassword(e.currentTarget.value)} placeholder="password" />
      <button onClick={handleLogin}>Se connecter</button>
    </AuthPage>
  );
}