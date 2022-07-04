import * as admin from 'firebase-admin'
import * as express from 'express'


const db = admin.firestore()
const router = express.Router()

interface Todo {
  title: string
  done: boolean
  createdAt: string
  updatedAt: string
}

// 투두 조회
// http://localhost:5001/kdt2-test/us-central1/api/todo
router.get('/', async (req, res) => {
  console.log(req.headers)
  console.log(req.body)
  console.log(req.params)
  console.log(req.query)

  const snaps = await db.collection('Todos').get()
  //디비쿼리문
  // .where('done','==','false')
  
  type ResponseTodo = Todo & { id: string}

  const todos: ResponseTodo[] = []
  snaps.forEach(snap => {
    //필드 부분
    const fields = snap.data()
    todos.push({
      id: snap.id,
      ...fields as Todo
    })
  })

  res.status(200).json(todos)
})

//투두 추가
router.post('/', async (req,res)=> {
  const {title} = req.body
  const todo: Todo = {
    title,
    done: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
  
  const ref = await db.collection('Todos').add(todo)

  //반환 (응답결과)
  res.status(200).json({
    id: ref.id,
    ...todo
  })
})
// router.put('')
// router.delete('')

export default router
