import express from 'express'


const app = express()

app.listen(3011, ()=>{
    console.log('server is started at http://localhost:3011')
})