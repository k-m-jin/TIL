import * as admin from 'firebase-admin'
import { nanoid } from 'nanoid'
// import validator from 'validator'
import * as FileType from 'file-type'

export async function saveFile(base64: string , bucketName = 'kdt2-test ') {
  //스토리지에 파일 저장
  //버킷: 스토리지에서 관리하는 폴더 느낌
  const bucket = admin.storage().bucket(bucketName)

  // if (!validator.isBase64(base64)) {
  //   throw{ststus: 400, message: '잘못된 양식입니다.'}
  // }

  const [, body] = base64.split(',')
  const buffer = Buffer.from(body, 'base64')
  const byteLength =  Buffer.byteLength(buffer)
  if( 10 * 1024 * 1024 < byteLength) {
    throw{ststus: 400, message: '제한 용량 초과'} 
  }

  const {ext} = await FileType.fromBuffer(buffer) as { ext:string }
  const allowTypes = ['jpg','png','webp']
  if (!allowTypes.includes(ext)) {
    throw{ststus: 400, message: '유효한 타입이 아닙니다!'}
  }


  //파이어베이스 코드
  const file = bucket.file(`${nanoid()}.${ext}`)
  await file.save(buffer)
  
  // return process.env.NODE_ENV === 'development'
  // ? `http://localhost:9199/${bucketName}/image.jpg`
  // : `https://strage.googleapis.com/${bucketName}/image.jpg`

  //위에 수동으로 작성한 코드를 자동으로 해주는 함수
  return file.publicUrl()
}
