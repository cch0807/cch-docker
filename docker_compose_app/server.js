const express = require('express')
const redis = require('redis')
// 레디스 클라이언트 생성
const redis_client = redis.createClient({
    host:"redis-server",
    port: 6379
})

const app = express();

//숫자는 0 부터 시작
redis_client.set('number', '0')

app.get('/', (req, res) => {
    redis_client('number', (err, number) => {
        // 현재 숫자를 가져온 후 1씩 증가.
        redis_client.set('number', parseInt(number) + 1)
        res.send('NUMBER : ' + number)
    })
})

app.listen(8080);
console.log('Server is running');


