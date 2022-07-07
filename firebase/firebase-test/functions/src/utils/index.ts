import * as admin from 'firebase-admin'

export async function saveFile(base64: string , bucketName = 'images') {
  //스토리지에 파일 저장
  //버킷: 스토리지에서 관리하는 폴더 느낌
  const bucket = admin.storage().bucket(bucketName)
  const [, body] = base64.split(',')
  const buffer = Buffer.from(body, 'base64')
  //파이어베이스 코드
  const file = bucket.file('image.jpg')
  await file.save(buffer)
  
  return process.env.NODE_ENV === 'development'
  ? `http://localhost:9199/${bucketName}/image.jpg`
  : `https://strage.googleapis.com/${bucketName}/image.jpg`
}
