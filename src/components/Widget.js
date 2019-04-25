import React, { useEffect, useState } from 'react'
import Feed from './Feed'
import useInterval from '../hooks/useInterval'
import { fetchNewPosts } from '../services/feed'
import { toUnixTimestamp } from '../utils'

export default function Widget ({ feedUrl, updateInterval, numberOfPosts }) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [posts, setPosts] = useState([])

  const latestPost = posts[0] || {}

  useEffect(() => {
    function initialFetch () {
      fetchNewPosts(feedUrl, numberOfPosts)
        .then(setPosts)
        .then(() => setIsLoading(false))
        .catch(error => setError(error.message))
    }

    setError(null)
    initialFetch()
  }, [feedUrl, numberOfPosts])

  useInterval(async () => {
    try {

      const fetchedPosts = await fetchNewPosts(feedUrl, numberOfPosts, toUnixTimestamp(latestPost.createdAt))
      setPosts(processPosts(fetchedPosts, posts, numberOfPosts))
      setError(null)
    } catch (e) {
      setError(e.message)
    }
  }, updateInterval)

  return <Feed posts={posts} isLoading={isLoading} error={error}/>
}

function processPosts (prevPosts, newPosts, numberOfPosts) {
  const uniquePosts = [...newPosts, ...prevPosts]
    .reduce((acc, post) => ({ ...acc, [post.id]: post }), {})
  return Object.values(uniquePosts)
  // reverse sort by date
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, numberOfPosts)
}