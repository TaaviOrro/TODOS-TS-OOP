import express, {Request, Response, NextFunction} from 'express'
import { json } from 'body-parser'

import todoRoutes from './routes/todos'

const app = express()

app.use(json())

app.use('/todos', todoRoutes)

app.use((error: Error, Req: Request, res:Response, next: NextFunction)=>{
    res.json({message: error.message})
})

app.listen(3011, ()=>{
    console.log('server is started at http://localhost:3011')
})