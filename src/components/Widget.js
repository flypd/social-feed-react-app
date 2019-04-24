import React, { useEffect, useState } from 'react'
import Feed from './Feed'
import useInterval from '../hooks/useInterval'

export default function Widget ({ feedUrl, updateInterval, numberOfPosts }) {
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchNewPosts(feedUrl, numberOfPosts)
      .then(setPosts)
      .then(() => setIsLoading(false))
  }, [feedUrl, numberOfPosts])

  useInterval(async () => {
    const newPosts = await fetchNewPosts(feedUrl, numberOfPosts)
    setPosts(newPosts)
  }, updateInterval)

  return isLoading ? <span>'Loading posts'</span> : <Feed posts={posts}/>
}

function fetchNewPosts (feedUrl, number) {
  const url = `${feedUrl}?limit=${number}`
  console.log('Fetching new posts', url)
  return fetch(url)
    .then(response => response.json())
}
