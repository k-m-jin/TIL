import * as admin from 'firebase-admin'
import * as express from 'express'


const db = admin.firestore()
const router = express.Router()

interface Todo {
  id?:string
  title: string
  done: boolean
  createdAt: string
  updatedAt: string
  deleted: boolean
}

//Job
async function addDeleted() {
  const snaps = await db.collection('Todos').get()
  
  //snap 안에 docs 에 유사배열 이 있음
  for ( const snap of snaps.docs ) {
    snap.ref.update({
      deleted: false
    })
  }
  console.log('done!')


  // //forEach 가 콜백의 비동기를 보장하지 않음
  // snaps.forEach(async snap => {
  //   await snap.ref.update({
  //     deleted: false
  //   })
  // })
}
// addDeleted()

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
  const {title} = req.body
  const todo: Todo = {
    title,
    done: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
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
 const { title, done } = req.body
 const { id } = req.params

 //snap : 디비에서 찾은 정보
 const snap = await db.collection('Todos').doc(id).get()
//에외처리
 if (!snap.exists) {
  return res.status(404).json('존재하지 않는 정보입니다.')
  }

 const { createdAt } = snap.data() as Todo
 const updatedAt = new Date().toDateString()

 await snap.ref.update({
  title,
  done,
  updatedAt
 })
 
 return res.status(200).json({
  id: snap.id,
  title,
  done,
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
