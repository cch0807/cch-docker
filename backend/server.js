// 필요한 모듈 가져오기
const express = require('express');
const bodyParser = require('body-parser')

const db = require('./db');

// Express 서버 생성
const app = express();

// json 형태로 오는 요청의 본문을 해석해줄수 있게 등록
app.use(bodyParser.json())

app.listen(5000, () => {
    console.log(' application started 5000 port.')
})

// DB lists 테이블에 있는 모든 데이터를 프론트에 전달
app.get('/api/values', function (req, res, next) {
    db.pool.query('SELECT * FROM limits;',
    (err, results, fields) => {
        if (err)
            return res.status(500).send(err)
        else
            return res.json(results)
    })
})

// 클라이언트에서 입력한 값을 데이터베이스 lists 테이블에 넣어주기
app.post('/api/value', function (req, res, next) {
    db.pool.query(`INSERT INTO lists (value) VALUES("${req.body.value}");`,
    (err, results, fields) => {
        if (err)
            return res.status(500).send(err)
        else
            return res.json({ success: true, value: req.body.value})
    })
})

