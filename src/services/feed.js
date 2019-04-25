import { renameProp } from '../utils'

export function fetchNewPosts (feedUrl, number = 10, sinceTimestamp) {
  const params = new URLSearchParams()
  params.set('limit', number.toString())
  if (sinceTimestamp) {
    params.set('timeframe[start]', sinceTimestamp)
  }

  const url = `${feedUrl}?${params}`
  console.debug('Fetching new posts from feed', url)
  return fetch(url, { mode: 'cors' })
    .then(response => {
      const contentType = response.headers.get('content-type')
      if (response.ok && contentType && contentType.includes('application/json')) {
        return response.json()
      }
      throw new Error()
    })
    .then(processPosts)
    .catch(error => {
      const message = `Error while fetching posts from feed ${feedUrl}`
      console.error(message, error)
      throw new Error(message)
    })
}

function processPosts (posts) {
  return posts.map(post => renameProp('created_at', 'createdAt', post))
}