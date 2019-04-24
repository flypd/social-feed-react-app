import React from 'react'

export default function WidgetForm (
  {
    feedUrl,
    numberOfPosts,
    updateInterval,
    setFeedUrl,
    setNumberOfPosts,
    setUpdateInterval
  }) {
  return (
    <form>
      <div className='form'>
        <div className='form-group'>
          <label htmlFor='feedUrl'>Feed URL</label>
          <input
            id='feedUrl'
            type='text'
            className='form-control'
            placeholder='Feed url'
            value={feedUrl}
            onChange={e => setFeedUrl(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='numberOfPosts'>Number of posts</label>
          <input
            id='numberOfPosts'
            type='number'
            min={1}
            className='form-control'
            value={numberOfPosts}
            onChange={e => setNumberOfPosts(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor="updateInterval">Update interval (s)</label>
          <input
            id='updateInterval'
            type='number'
            min={1}
            className='form-control'
            value={updateInterval / 1000}
            onChange={e => setUpdateInterval(e.target.value * 1000)}
          />
        </div>
      </div>
    </form>
  )
}