FROM node:alpine as builder
# 현재 FROM부터 다음 FROM전까지는 모두 builder stage라는 것을 명시

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY ./ ./

RUN npm run build

#---------------------------------------------------------------------

FROM nginx
# nginx를 위한 베이스 이미지

# run stage
# 이곳의 목표는 빌드파일들을 생성하는 것
# 생성된 파일과 폴더들은 /usr/src/app/build로 들어간다.

COPY --from=builder /usr/src/app/build /usr/share/nginx/html
# 다른 stage에 있는 파일을 복사할 때 다른 stage 이름을 명시

# builder stage에서 생성된 파일들은 /usr/src/app/build에 들어가게되며 그곳에 저장된
# 파일들을 /usr/share/nginx/html로 복사를 시켜줘서 nginx가 웹 브라우저의 http 요청이
# 올 때 마다 알맞은 파일을 전해 줄 수 있게 만든다.

# /usr/share/nginx/html 로 build 파일들을 복사하는 이유?
# 위 장소로 파일을 넣어두면 Nginx가 알아서 Client에게 요청이 들어올 때 알맞은 정적
# 파일들을 제공해준다. 이 장소는 설정을 통해서 바꿀 수 있다.

