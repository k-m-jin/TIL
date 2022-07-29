import React, { useState } from 'react'
import moment from 'moment-timezone'

function Test() {
  const [times, setTimes] = useState([
    { id: 1, tz: 'Asia/Seoul' },
    { id: 2, tz: 'Asia/Taipei' },
    { id: 3, tz: 'US/Pacific' },
  ])
  const buttonDelete = (id) => {
    times.filter((t) => t.id !== id)
    console.log('delde')
  }
  return (
    <div>
      <h1>Test</h1>
      {times.map((time) => {
        return (
          <div key={times.id}>
            <div>{time.tz}</div>
            <p>{moment().tz(time.tz).format('YYYY-MM-DD HH:mm:ss')}</p>
            <button onClick={() => buttonDelete(time.id)}>제거하기</button>
            <button
              onClick={() => {
                setTimes(times.filter((t) => t.id !== time.id))
              }}
            >
              delete
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Test
