import React, { useState, useEffect } from 'react'

function Loading() {
  const [isLoaded, setIsLoaded] = useState(false)
  // const [text, setText] = useState([])
  const [loc, setLoc] = useState([])
  const [subLoc, seSubLoc] = useState([])

  useEffect(() => {
    //컴포넌트가 렌더링 될때 실행될 함수
    setTimeout(() => {
      setIsLoaded(true)
    }, 3000)
  }, [])

  // //When complate loading
  // useEffect(() => {
  //   //업데디트 될때 실행 + 처음 컴포넌트가 렌더링 될때도 실행
  //   setText(text.concat(['추가!']))
  // }, [isLoaded])

  useEffect(() => {
    if (loc === '서울') {
      seSubLoc(subLoc.concat(['서초']))
    } else if (loc === '부산') {
      seSubLoc(subLoc.concat(['해운대']))
    }
  }, [loc])

  return (
    <div>
      <h1>Loading</h1>
      {isLoaded ? (
        <>
          로딩 완료!
          <button onClick={() => setLoc('서울')}>서울</button>
          <button onClick={() => setLoc('부산')}>부산</button>
          <p>현재 내 지역 :{loc} </p>
          <p>세부 지역 : {subLoc}</p>
        </>
      ) : (
        <> 로딩 중</>
      )}
    </div>
  )
}

export default Loading
