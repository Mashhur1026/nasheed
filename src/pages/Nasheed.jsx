import React, { useState, useEffect } from 'react'
import { useParams, Link, useSearchParams } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
import { BiSkipNext } from 'react-icons/bi'
import { BiSkipPrevious } from 'react-icons/bi'
import { useGlobalContext } from '../contex'
import { AiOutlineClose } from 'react-icons/ai'

import nasheeds from '../data'

function Nasheed() {
  const [queryParametrs] = useSearchParams()
  const { openSidebar, path } = useGlobalContext()
  const { id } = useParams()
  const [selectedNasheed, setSelectedNasheed] = useState(null)
  const [selectedInd, setSelectedInd] = useState(null)
  const pathname = window.location.pathname
  const checkCategory = queryParametrs.get('category')
  const checkArtist = queryParametrs.get('artist')
  const data = checkCategory
    ? nasheeds.filter((nasheed) => nasheed.category === checkCategory)
    : (checkArtist ? nasheeds.filter((nasheed) => nasheed.artist === checkArtist) : nasheeds)

  // Determine the target link based on the current pathname
  const targetLink = pathname === '/nasheed' ? '/' : path

  useEffect(() => {
    if (selectedNasheed === null) {
      const song = data.find((item) => item.id === parseInt(id))
      setSelectedNasheed(song)
    }
  }, [id, data, selectedNasheed])

  useEffect(() => {
    if (selectedNasheed && selectedInd === null) {
      data.forEach((nasheed, i) => {
        if (selectedNasheed.id === nasheed.id) {
          setSelectedInd(i)
        }
      })
    }
  }, [selectedNasheed, selectedInd, data])

  const nextSong = () => {
    let number = selectedInd + 1
    if (number > data.length - 1) {
      number = 0
    }
    setSelectedNasheed(data.find((item, i) => i === number))
    setSelectedInd(number)
  }

  const prevSong = () => {
    let number = selectedInd - 1
    if (number < 0) {
      number = data.length - 1
    }
    setSelectedNasheed(data.find((item, i) => i === number))
    setSelectedInd(number)
  }

  if (!selectedNasheed) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }

  const { img, artist, song, name } = selectedNasheed

  return (
    <>
      <div className='hamburger'>
        <button onClick={openSidebar}>
          <RxHamburgerMenu />
        </button>
      </div>

      <div className='single-nasheed' key={id}>
        <Link to={targetLink}>
          <div className='close-song-btn'>
            <button>
              <AiOutlineClose />
            </button>
          </div>
        </Link>

        <img src={img} alt={name} />
        <div className='p'>
          <p>{name}</p>
          <p className='p-2'>{artist}</p>
        </div>
        <div className='controls'>
          <button id='previousButton' onClick={prevSong}>
            <BiSkipPrevious />
          </button>
          <audio className='audio' src={song} controls autoPlay>
            Your browser does not support the audio element.
          </audio>
          <button id='nextButton' onClick={nextSong}>
            <BiSkipNext />
          </button>
        </div>
      </div>
    </>
  )
}

export default Nasheed
