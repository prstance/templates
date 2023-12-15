export interface AuthStore {
  isAuthenticated: boolean;
  authTokens: null | AuthTokens;
  decodedJWT: null | DecodedJWT;
  user: null | User;
}

export interface AuthTokens {
  access: string,
  refresh: string
}
export type DecodedJWT = {
  userId: string;
}

export interface User {
  // User types
}

