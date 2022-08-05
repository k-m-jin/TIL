import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

function AlbumList() {
  const [albums, setAlbums] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [filteredAlbums, setFilteredAlbums] = useState(null)

  const searchInputHandler = (e) => {
    const filter = e.target.value
    filter ? setSearchParams({ filter }) : setSearchParams({})
  }

  const filterAlbums = () => {
    return (
      albums &&
      albums.filter((album) => {
        const filter = searchParams.get('filter')
        const title = album.title.toLowerCase()
        return filter ? title.includes(filter) : true
      })
    )
  }

  const fetchData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums')
    setAlbums(response.data)
    setFilteredAlbums(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    albums && setFilteredAlbums(filterAlbums())
  }, [searchParams])

  return (
    <div>
      <input onChange={searchInputHandler} />
      {filteredAlbums &&
        filteredAlbums.map((album) => {
          return (
            <Link to={`${album.id}`} key={album.id}>
              <p>{album.title}</p>
            </Link>
          )
        })}
    </div>
  )
}

export default AlbumList
