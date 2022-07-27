import React, { useEffect, useState } from 'react'
import moment from 'moment-timezone'

function Timer({ s }) {
  const [seconds, setSeconds] = useState(s)
  const [isStart, setIsStart] = useState(false)
  const [time, setTime] = useState(moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss'))

  useEffect(() => {
    if (isStart) {
      const countDown = setTimeout(() => {
        setSeconds(seconds - 1)
      }, 1000)
      return () => clearTimeout(countDown)
    }
  }, [isStart, seconds])

  useEffect(() => {
    setTimeout(() => {
      setTime(moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss'))
    }, 1000)
  }, [time])

  return (
    <div>
      <h1>Timer</h1>
      <p>현재 시각</p>
      <p>{time}</p>
      <button
        onClick={() => {
          setIsStart(true)
        }}
      >
        시작
      </button>
      <button
        onClick={() => {
          setIsStart(false)
        }}
      >
        중지
      </button>
      {seconds}
    </div>
  )
}

export default Timer
