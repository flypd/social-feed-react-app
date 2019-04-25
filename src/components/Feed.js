import React from 'react'
import Post from './Post'

export default function Feed ({ posts, isLoading = false, error = null }) {

  if (error) {
    return <FeedError error={error}/>
  }

  if (isLoading) {
    return <FeedLoading/>
  }

  return (
    <ul>
      {posts.map(
        post =>
          <div key={post.id.toString()} className='mb-3'>
            <Post
              author={post.user.name}
              body={post.text}
              createdAt={post.createdAt}
            />
          </div>
      )}
    </ul>
  )
}

function FeedLoading () {
  return (
    <div className='card bg-info m-3'>
      <div className='card-body'>
        <div className='card-title'>
          <h3>Loading feed</h3>
        </div>
      </div>
    </div>
  )
}

function FeedError ({ error }) {
  return (
    <div className='card bg-danger text-white m-3'>
      <div className='card-body'>
        <div className='card-title'>
          <h3>Something went wrong</h3>
        </div>
        <div className='card-text'>
          <span>{error}</span>
        </div>
      </div>
    </div>
  )
}
