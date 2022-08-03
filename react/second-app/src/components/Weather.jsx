import React from 'react'
import useAsync from '../hooks/useAsync'
import { getWeather } from '../utils/getWeather'

function Weather() {
  const state = useAsync(getWeather)
  const { loading, data: weather, error } = state

  if (loading) return <p>로딩중</p>
  if (error) return <p>{error}</p>
  return (
    <div>
      {weather &&
        weather.map((element) => {
          return (
            <p>
              {element.category}
              {element.fcstDate}
              {element.fcstTime}
              {element.fcstValue}
            </p>
          )
        })}
    </div>
  )
}

export default Weather
