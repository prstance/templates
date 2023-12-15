# STU Template (with jwt auth)

Basic frontend template handling JWT authentication with SolidJs, Typescript, and Unocss.

Attention, you must have a backend that adheres to the standards explained in the 'Backend specs' section. Also, make sure to change the URL linking the frontend to the backend in `src/stores/api` -> `baseUrl`


## Run Locally

Clone the project using [bun.sh](https://bun.sh)

```bash
  bunx degit prstance/STU-jwt STU-jwt
```

Go to the project directory

```bash
  cd STU-jwt
```

Install dependencies

```bash
  bun install
```

Start the server

```bash
  bun run dev
```


## Backend specifications

This frontend template with JWT authentication will not work unless you adhere to the specifications below. Feel free to modify/adapt the functionality of this template according to your preferences.

### API endpoints
#### Get auth tokens

```http
  POST /token
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. |
| `password` | `string` | **Required**. |

Response
```
{
  "status": "ok",
  "data": {
    "access": "access token",
    "refresh": "refresh token"
  }
}
```

#### Refresh tokens

```http
  POST /token/refresh
```

| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**, Refresh token |

Response 200
```
{
  "status": "ok",
  "data": {
    "access": "access token",
    "refresh": "refresh token"
  }
}
```
Response 401
```
{
  "status": "error",
  "message": "REFRESH_TOKEN_ERROR"
}
```

#### Refresh tokens

```http
  GET /user
```

| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**, Access token |

Response 200
```
{
  "status": "ok",
  "data": {
    "id": number,
    "username": string,
    "password": string
  }
}
```
Response 401
```
{
  "status": "error",
  "message": Any
}
```

## License

[MIT](https://choosealicense.com/licenses/mit/)