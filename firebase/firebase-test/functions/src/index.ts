//CommonJS => require(), module.exports
// ESM => import, export

//초기화가 제일 위에 있어야함 관리자 권한
import * as admin from 'firebase-admin'
admin.initializeApp()
// import * as dotenv from 'dotenv'
// dotenv.config()

import * as functions from 'firebase-functions'
import * as express from 'express'
import * as cors from 'cors'
import todo from './routes/todo'
// import './jobs'

const app = express()
app.use(express.json())
//모든 요청 허용
app.use(cors())
app.use('/todo', todo)


// export const heropy = functions.https.onRequest((request, response) => {
//   functions.logger.info('Hello logs!', {structuredData: true})
//   response.send('Hello from Firebase!')
// })
export const api = functions.https.onRequest(app)
// http://localhost:5001/kdt-test-9f352/us-central1/api/todo
// https://us-central1-kdt-test-9f352.cloudfunctions.net/api/todo
