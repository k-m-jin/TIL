import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import TodoLIst from './component/220729/TodoList'

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <GlobalStyle /> */}
      <TodoLIst />
    </ThemeProvider>
  )
}

export default App
