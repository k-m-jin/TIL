import React, { useState, useEffect } from 'react'

function Prc() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [location, setlocation] = useState([])
  const [minilocation, setMinilocation] = useState([])
  const [where, setWhere] = useState('')

  useEffect(() => {
    //컴포넌트가 렌더링 될때 실행될 함수
    setTimeout(() => {
      setIsLoaded(true)
    }, 5000)
  }, [])

  //When complate loading
  useEffect(() => {
    //업데디트 될때 실행 + 처음 컴포넌트가 렌더링 될때도 실행
    if (where === '서울') {
      setlocation(location.concat(['서울']))
      setMinilocation(minilocation.concat(['강남구']))
    } else if (where === '부산') {
      setlocation(location.concat(['부산']))
      setMinilocation(minilocation.concat(['해운대수영동래']))
    }
  }, [isLoaded])

  const pickSeoul = () => {
    setWhere('서울')
  }
  const pickBusan = () => {
    setWhere('부산')
  }
  return (
    <div>
      {isLoaded ? (
        <>
          로딩 완료!
          <button onClick={pickSeoul}>서울</button>
          <button onClick={pickBusan}>부산</button>
          <p>현재 내 지역 :{location} </p>
          <p>세부 지역 : {minilocation}</p>
        </>
      ) : (
        <> 로딩 중</>
      )}
    </div>
  )
}

export default Prc
