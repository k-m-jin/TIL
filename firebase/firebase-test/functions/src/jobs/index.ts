import * as admin from 'firebase-admin'

const db = admin.firestore()

async function addFields() {
  const snaps = await db.collection('Todos')
  .get()
  
  //snap 안에 docs 에 유사배열 이 있음
  for ( const snap of snaps.docs ) {
    await snap.ref.update({
      image: null
    })
  }
  console.log('done!')


//   // //forEach 가 콜백의 비동기를 보장하지 않음
//   // snaps.forEach(async snap => {
//   //   await snap.ref.update({
//   //     deleted: false
//   //   })
//   // })
}
addFields()

