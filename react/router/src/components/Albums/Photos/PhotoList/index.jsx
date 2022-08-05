import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function PhotoList() {
  const params = useParams()
  const [photos, setPhotos] = useState()

  const fetchData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos', { params })
    setPhotos(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {photos &&
        photos.map((photo) => {
          return (
            <Link to={`photos/${photo.id}`} state={{ url: photo.url }}>
              <p>{photo.title}</p>
              <img src={photo.thumbnailUrl} alt={`${photo.id}_photo`} />
            </Link>
          )
        })}
    </div>
  )
}

export default PhotoList
