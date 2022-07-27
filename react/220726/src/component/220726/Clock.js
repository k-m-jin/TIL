import React, { useState } from 'react'
import moment from 'moment-timezone'

function Clock(props) {
  const { newTz } = props
  const [time, setTime] = useState(moment().tz(newTz).format('YYYY-MM-DD HH:mm:ss'))

  // const toSeoul = () => {
  //   setTime(moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss'))
  // }

  const changeTz = (TZ) => {
    setTime(moment().tz(TZ).format('YYYY-MM-DD HH:mm:ss'))
  }

  return (
    <>
      <h1>Clock</h1>
      <div>{time}</div>
      <button onClick={() => changeTz('Asia/Seoul')}>서울</button>
      <button onClick={() => changeTz('US/Pacific')}>미국</button>
      {/* 버튼 props 으로 받기 */}
      <button onClick={() => changeTz(newTz)}>{newTz}으로 바꾸기</button>
    </>
  )
}

export default Clock
