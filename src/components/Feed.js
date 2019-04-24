import React from 'react'
import Post from './Post'

export default function Feed ({ posts }) {
  const postsList = posts.map(
    post =>
      <div key={post.id.toString()} className='mb-3'>
        <Post
          author={post.user.name}
          body={post.text}
          created_at={post.created_at}
        />
      </div>
  )

  return (
    <ul>
      {postsList}
    </ul>
  )
}