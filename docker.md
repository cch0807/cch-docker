
# 컨테이너 나열하기

- CONTAINER ID: 컨테이너의 고유한 아이디 해쉬값. 실제로는 더욱 길지만 일부만 표출
- IMAGE: 컨테이너 생성시 사용한 도커 이미지
- COMMAND: 컨테이너 시작시 실행될 명령어. 대부분 이미지에 내장되어있음
- CREATED: 컨테이너가 실행된 시간
- STATUS: 컨테이너의 상태
- PORTS: 컨테이너가 개방한 포트와 호스트에 연결한 포트.
- NAMES: 컨테이너 고유한 이름. docker rename 명령어로 변경 가능.

docker ps --format 'table{{.Names}}\table{{.Image}}'

# 도커 컨테이너의 생명주기
생성(create) -> 시작(start) -> 실행(running) -> 중지(stopped) -> 삭제(deleted)

docker create <이미지 이름> 
docker start -a <컨테이너 이미지/이름>

docker stop <컨테이너 아이디/이름>
docker kill <컨테이너 아이디/이름>

- stop과 kill의 차이?
    - Stop은 Gracefully하게 중지 시킨다.
    - kill은 stop과 달리 어떠한 것도 기다리지않고 바로 컨테이너를 중지시킨다.

docker rm <아이디/이름>
docker rm 'docker ps -a -q'

- docker system prune
    - 도커를 쓰지 않을때 모두 정리하고 싶을때 사용하면 좋다.
    - 하지만 이것도 실행중인 컨테이너에는 영향을 주지 않는다.


# 실행중인 컨테이너에 명령어 전달

- docker exec <컨테이너 아이디/이름>

# 레디스를 이용한 컨테이너 이해

1. 레디스 서버를 작동.
