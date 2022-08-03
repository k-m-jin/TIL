import { useReducer, useEffect } from 'react'
import { weatherReducer } from '../reducers'

function useAsync(callback) {
  const initialState = {
    loading: false,
    data: null,
    error: false,
  }

  const [state, dispatch] = useReducer(weatherReducer, initialState)

  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    try {
      const data = await callback()
      dispatch({ type: 'SUCCESS', data })
    } catch (e) {
      dispatch({ type: 'ERROR', error: e })
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  // fetchData 도 같이 리턴해주는 방식도 있을 것!
  return state
}

export default useAsync
