# Nginx - React - Nodejs - Mysql 연동 실습

<br> 

## 아키텍처
![무제 drawio (17)](https://github.com/mgKang3646/Docker-Fullstack-App/assets/80077569/dfd953a5-ad5d-4199-b2d5-688689329b53)

<br> 

## Ngnix ( 리버스 프록시 서버 )
클라이언트(User)가 웹페이지를 요청하면 FrontEnd 서비스에서 제공 가능하지만, API로 데이터를 요구한다면 DB와 연동된 BackEnd 서비스가 필요하다.  두 개의 서비스가 하나의 시스템에 있다. 두 개의 서비스를 포트번호로 분리해서 구현하면 클라이언트는 서비스를 이용이 굉장히 불편할 것이다. 웹페이지 서비스에는 3000번 포트로, API 서비스에는 5000번 포트로 접근해야 하니 말이다.
그러므로 중간에서 요청을 적절한 서비스에 분산시켜줄 프록시 서버가 필요한데, 그것이 Nginx이다. 

<br> 

## React ( 프론트엔드  )
npm run start로 리액트 개발서버를 띄웠다. 개발환경은 변경된 소스가 실시간으로 반영되어 브라우저에 보여야 한다. 리액트 개발서버를 띄우면 변경된 소스를 실시간으로 빌드하여 브라우저에 반영할 수 있다. 개발환경이 아닌 경우, 리액트는 npm run build로 정적소스를 생성하고 ngnix나 serve 패키지 같은 웹서버가 정적소스를 바라보는 구조로 구성된다. 운영환경은 실시간 반영보다는 빠른 반응이 중요하다. 정적소스를 미리 생성해놓고 요청이 들어오면 바로 응답할 수 있도록  웹서버를 구현하는 것이다. 

<br> 

## NodeJS ( 백엔드  )
백엔드 서버의 경우 소스변경시 서버재기동이 필요하다. 자동으로 서버재기동이 가능하도록 package.json에 dev라는 명칭으로 nodemon을 모듈을 사용하도록 설정해놓았다. nodemon은 코드가 변경되면 자동으로 서버재기동을 가능하도록 도와주는 모듈이다. 그리고 Dockerfile에는 npm run dev로 소스변경시 자동으로 재기동하는 백엔드 서버를 기동하도록 설정한다.

<br> 

## MySQL ( DB ) 
MySQL 이미지는 플랫폼 일관성을 유지해야 한다. 나는 Mac m1칩 환경(ARM64)이다. 도커는 환경과 유사한 베이스이미지를 가져오려고 하기 때문에 플랫폼 옵션으로 AMD64환경의 MySQL이미지를 가져올 수 있도록 설정해야 한다. 그리고 인코딩 설정파일을 복사한다. 


## 상세설명 

[![Tistory's Card](https://github-readme-tistory-card.vercel.app/api/badge?name={lordofkangs}&postId={564}&theme={santorini})](https://github.com/loosie/github-readme-tistory-card)
