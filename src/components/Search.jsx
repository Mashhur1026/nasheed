import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const [text,setText] = useState('')
  const navigate = useNavigate()

  const hendleSubmit = (e) => {
    e.preventDefault()
    const t = text
    setText('')
    navigate(`/search/${t}`)
  }


  return (
    <div className='search'>
      <form onSubmit={hendleSubmit}>
        <input value={text} onChange={(e)=>setText(e.target.value)} type="text" placeholder="Search" />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default Search
