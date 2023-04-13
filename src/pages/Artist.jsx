import React from 'react'
import nasheeds from '../data'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useParams, Link, useLocation } from 'react-router-dom'
import { useGlobalContext } from '../contex'

function Artist() {
  const { id } = useParams()
  const { openSidebar, setPath } = useGlobalContext()
  const selectedArtists = nasheeds.filter((nasheed) => nasheed.artist === id)

  const location = useLocation()

  if (!selectedArtists || selectedArtists.length === 0) {
    return <div>Artist not found</div>
  }

  const selector = () => {
    let img = ''
    let artistName = ''
    selectedArtists.forEach((item) => {
      const { artistImg, artist } = item
      img = artistImg
      artistName = artist
    })
    return { img, artistName }
  }

  const { img, artistName } = selector()

  return (
    <>
      <div className='hamburger'>
        <button onClick={openSidebar}>
          <RxHamburgerMenu />
        </button>
      </div>
      <section className='s-artist'>
        <div key={1} className='artist-info'>
          <img src={img} alt={artistName} />
          <h1>{artistName}</h1>
          <p>{selectedArtists.length} songs</p>
        </div>
        <div className='artist-songs'>
          {selectedArtists.map((nasheed) => {
            const { artistImg, name, id, artist } = nasheed
            return (
              <Link
                to={`/nasheed/${nasheed.id}`}
                key={id}
                className='link-no-underline'
              >
                <div
                  onClick={() => setPath(location)}
                  key={id}
                  className='nasheed'
                >
                  <img src={artistImg} alt={name} />
                  <div className='text'>
                    <p>{name}</p>
                    <span>{artist}</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Artist
