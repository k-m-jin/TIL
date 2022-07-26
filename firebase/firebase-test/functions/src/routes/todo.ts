import * as admin from 'firebase-admin'
import * as express from 'express'
import {saveFile} from '../utils'

const db = admin.firestore()
const router = express.Router()

interface Todo {
  id?:string
  title: string
  image: string | null
  done: boolean
  createdAt: string
  updatedAt: string
  deleted: boolean
}

//Job

// 투두 조회
// http://localhost:5001/kdt2-test/us-central1/api/todo
router.get('/', async (req, res) => {
  console.log(req.headers)
  console.log(req.body)
  console.log(req.params)
  console.log(req.query)

  const snaps = await db.collection('Todos')
  .where('deleted','!=',true)
  .get()
  //디비쿼리문
  // .where('done','==','false')

  const todos: Todo[] = []
  snaps.forEach(snap => {
    //필드 부분
    const fields = snap.data()
    todos.push({
      id: snap.id,
      ...fields as Todo
    })
  })

  
  todos.sort((a,b) => {
    const aTime: number = new Date(a.createdAt).getTime()
    const bTime: number = new Date(a.createdAt).getTime()
    return bTime - aTime
  })

  res.status(200).json(todos)
})

//투두 추가
router.post('/', async (req,res)=> {
  const {apikey, username} = req.headers

  if (apikey !== '1234' || username !== 'heropy-admin') {
    res.status(401).json('유효한 사용자가 아닙니다.')
  }
  const {title, imageBase64} = req.body
  const date = new Date().toISOString()
  
  //스토리지에 파일 저장 
  // await 가 없으면 promise 반환
  let image = ''
  try {
    image = await saveFile(imageBase64)
  } catch (error) {
    console.log(error)
  }

  const todo: Todo = {
    title,
    image,
    done: false,
    createdAt: date,
    updatedAt: date,
    deleted: false
  }
  
  const ref = await db.collection('Todos').add(todo)

  //반환 (응답결과)
  res.status(200).json({
    id: ref.id,
    ...todo
  })
})

//투두 수정
router.put('/:id', async (req, res) => {
 const { title, done, imageBase64 } = req.body
 const { id } = req.params

 //snap : 디비에서 찾은 정보
 const snap = await db.collection('Todos').doc(id).get()
//에외처리
 if (!snap.exists) {
  return res.status(404).json('존재하지 않는 정보입니다.')
  }

  //스토리지에 파일 저장
  const image = await saveFile(imageBase64)

 const { createdAt } = snap.data() as Todo
 const updatedAt = new Date().toDateString()

 await snap.ref.update({
  title,
  done,
  image,
  updatedAt
 })
 
 return res.status(200).json({
  id: snap.id,
  title,
  done,
  image,
  createdAt,
  updatedAt
 })
})

//투두 삭제
router.delete('/:id', async (req, res) => {
  const { id } = req.params

  const snap = await db.collection('Todos').doc(id).get()
  //예외처리
  if (!snap.exists) {
    return res.status(404).json('존재하지 않는 정보입니다.')
  }

  // 디비에서 실제 삭제는 비추천
  // await snap.ref.delete()
  snap.ref.update({
    deleted: true
  })

  res.status(200).json(true)
  return
})

export default router
