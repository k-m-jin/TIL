import Intro from './component/Intro'
import Clock from './component/Clock'
import Board from './component/Board'
import Test from './component/Test'

function App() {
  return (
    <div>
      <Intro name='김명진' age='25' email='mem@naver.com' />

      <Clock newTz='Asia/Seoul' />
      <Clock newTz='Asia/Taipei' />

      <Board category='영화' />

      <Test />
    </div>
  )
}

export default App
