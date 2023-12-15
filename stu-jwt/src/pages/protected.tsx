import AuthPage from "~/components/auth-page";

export default function Protected() {
  return (
    <AuthPage protected>
      <h1>This is a protected and highly monitored page!</h1>
    </AuthPage>
  );
}