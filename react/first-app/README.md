# React

- npm
- yarn : 페이스북에서 만든 패키지 매니저
---
nvm 으로 node 최신 버전 설치
```
nvm install --lts
```
---

### Props
- 부모
```js
 <Intro name='김명진' age='25' email='mem@naver.com' />
```
```js
function Intro({ name = 'Jini', age }) {
  return (
    <>
    이름 : {name} <br />
    나이 : {age} <br />
    </>
  )
}
```
**기본값**
```js
function Intro({ name = 'Jini', age })
```
```js
Intro.defaltProps = {
  name: 'Jini',
}
```

### moment 

```js
import React, { useState } from 'react'
import moment from 'moment-timezone'

function Clock(props) {
  const {  newTz } = props
  const [time, setTime] = useState(moment().tz(newTz).format('YYYY-MM-DD HH:mm:ss'))

  const changeTz = (TZ) => {
    setTime(moment().tz(TZ).format('YYYY-MM-DD HH:mm:ss'))
  }

  return (
    <>
      <div>{time}</div>
      <button onClick={() => changeTz('Asia/Seoul')}>서울</button>
      <button onClick={() => changeTz('US/Pacific')}>미국</button>
    {/* 버튼 props 으로 받기 */}
      <button onClick={() => changeTz(newTz)}>{newTz}으로 바꾸기</button>
    </>
  )
}

export default Clock

```