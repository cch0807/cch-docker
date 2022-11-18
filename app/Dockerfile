FROM node:10

# Create app work directory
WORKDIR /usr/src/app

COPY ./ ./

RUN npm install
# npm은 Node.js로 만들어진 모듈을 웹에서 받아서 설치하고 관리해주는 프로그램.
# npm install은 package.json에 적혀있는 종속성들을 웹에서
# 자동으로 다운 받아서 설치해주는 명령어이다.

CMD ["node","server.js"]