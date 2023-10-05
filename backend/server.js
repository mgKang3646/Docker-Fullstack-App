// 필요한 모듈들을 가져오기
const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

//Express 서버를 생성
const app = express();

// json 현태로 오는 요청의 본문을 해석해줄 수 있게 등록
app.use(bodyParser.json());

//DB 테이블에 있는 모든데이터를 프론트 서버에 보내주기
app.get('/api/values',function(req,res){
    //데이터베이스에서 모든 정보 가져오기
    db.pool.query('SELECT * FROM lists;',
    (err,results,fields) => {
        if(err){
            console.log("테이블 조회 중 에러 발생");
            console.log(err);
            return res.status(500).send(err)
        }
        else{
            return res.json(results)
        }
    })
})

// 클라이언트에서 입력한 값을 데이터베이스 리스트 테이블에 넣어주기 
app.post('/api/value',function(req,res,next){
    db.pool.query(`INSERT INTO lists(value) VALUES("${req.body.value}");`,
    (err,results,fields)=>{
        if(err){
            console.log("데이터 삽입 중 에러 발생");
            console.log(err);
            return res.status(500).send(err)
        }
        else{
            return res.json({ success: true, value: req.body.value})
        } 
    })
})  

app.listen(5000,()=>{
    console.log('애플리케이션이 5000번 포트에서 시작되었습니다.');
})
