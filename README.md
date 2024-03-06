# app-vue3

This template should help get you started developing with Vue 3 in Vite.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Prettier

```
{
  "$schema": "https://json.schemastore.org/prettierrc",
  "arrowParens": "avoid", // 화살표 함수 괄호 사용 방식
  "semi": true,
  "bracketSameLine": true, // 객체 리터럴에서 괄호에 공백 삽입 여부
  "bracketSpacing": false,
  "tabWidth": 2,
  "singleQuote": true, // single 쿼테이션 사용 여부
  "printWidth": 100,
  "trailingComma": "all" // 여러 줄을 사용할 때, 후행 콤마 사용 방식
}
```

> 옵션 참고  
> https://persistent-weed-dev.tistory.com/entry/%EC%BD%94%EB%93%9C%EB%A5%BC-%EB%8D%94-%EC%9D%B4%EC%81%98%EA%B2%8C-Prettier

```

## Axios

### withCredentials

withCredentials 옵션은 단어의 의미에서 알 수 있듯이, 서로 다른 도메인(크로스 도메인)에 요청을 보낼 때 요청에 credential 정보를 담아서 보낼 지를 결정하는 항목입니다.

다른 도메인에 있는 백엔드 서버와 통신할 때 쿠키와 인증 정보를 함께 전송하는 것이다. 이를 통해 사용자 세션을 유지하고 보안이 필요한 요청을 처리할 수 있다.

> 사용 방식
>
> 1.  일반적으로 쿠키를 사용하여 사용자 세션을 관리하는 경우, 클라이언트와 서버 간에 쿠키를 주고받아야 한다. 이 때, withCredentials를 사용하여 쿠키를 전송하면 사용자의 로그인 상태를 유지할 수 있다.
> 2.  클라이언트와 서버가 다른 도메인에 위치하는 경우 (CORS 상황), 쿠키와 인증 정보를 함께 전송해야 하는 경우에 withCredentials를 사용한다. 이를 통해 다른 도메인의 서버와 안전하게 통신할 수 있다.
> 3.  특정 API 요청이 인증이 필요한 경우, 쿠키에 저장된 토큰 또는 세션 정보를 사용하여 인증을 수행할 수 있다. 이 때 withCredentials를 사용하여 요청에 쿠키를 포함시킬 수 있다.
```
