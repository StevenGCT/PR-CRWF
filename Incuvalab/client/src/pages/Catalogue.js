import { usePosts } from '../context/postContext'
import {VscBell} from 'react-icons/vsc'

export function Catalogue() { 

  const {posts} = usePosts()

  if (posts.length === 0) return(    
    <div className='flex flex-col justify-center items-center'>
      <br />
      <VscBell className='w-16 h-16'/>
      <h1>No hay campañas disponibles, Pero tu puedes empezar una!.</h1>
    </div>
  )

  return (
    <div>
      {posts.map(post => (
        <div key={posts.IdFunding}> 
          {post.Title}
        </div>
      ))}
    </div>
  )
}