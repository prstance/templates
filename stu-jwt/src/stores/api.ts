const baseUrl = "http://127.0.0.1:8080/";

const createUrl = (endpoint: string, query?: string) => {
  return baseUrl + endpoint + (!query ? "" : "?" + query);
};

export const getAuthTokens = async (username: string, password: string) => {
  const response = await fetch(createUrl("token"), {
    method: "POST",
    body: JSON.stringify({
      username,
      password
    }),
    headers: {
      "content-type": "application/json"
    }
  });

  if (!response.ok) throw new Error("LOGIN_ERROR");

  return response.json();
};


export const fetchData = async (accessToken: string) => {
  const authorization = () => accessToken;

  const headers = {
    "Authorization": "Bearer " + authorization()
  };

  // Fetch as much data as you want here
};

export const getUser = async (accessToken: string, refreshToken: string) => {

  const response = await fetch(createUrl("user"), {
    headers: {
      "authorization": "Bearer " + accessToken
    }
  });

  if (!response.ok && refreshToken) {
    const refreshTokenResponse = await fetch(createUrl("token/refresh"), {
      method: "POST",
      headers: {
        "authorization": "Bearer " + refreshToken
      }
    });

    if (!refreshTokenResponse.ok) throw new Error("TOKEN_ERROR");
    const refreshData = (await refreshTokenResponse.json()).data;
    return window.login(refreshData);
  }
  return response.json();
};