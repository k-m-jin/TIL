import axios from 'axios'

const queryParams = {
  serviceKey: process.env.REACT_APP_SERVICE_KEY,
  pageNo: 1,
  numOfRows: 100,
  dataType: 'JSON',
  base_date: '20220730',
  base_time: '0500',
  nx: 55,
  ny: 127,
}

export async function getWeather() {
  const response = await axios.get('1360000/VilageFcstInfoService_2.0/getVilageFcst', { params: queryParams })
  return response.data['response']['body']['items']['item']
}
