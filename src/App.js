import React, { useState } from 'react'
import './App.css'
import Widget from './components/Widget'
import WidgetForm from './components/WidgetForm'

function App () {
  const [feedUrl, setFeedUrl] = useState('http://api.massrelevance.com/MassRelDemo/kindle.json')
  const [numberOfPosts, setNumberOfPosts] = useState(10)
  const [updateInterval, setUpdateInterval] = useState(15000)

  return (
    <div className="container">

      <div className='row justify-content-center m-3'>
        <header className='text-center'>
          <h1 className='display-4'>Social Media Feed App</h1>
        </header>
      </div>

      <main className='row justify-content-center'>
        <div className='col'>
          <Widget
            feedUrl={feedUrl}
            numberOfPosts={numberOfPosts}
            updateInterval={updateInterval}
          />
        </div>

        <div className='col'>
          <WidgetForm
            feedUrl={feedUrl}
            numberOfPosts={numberOfPosts}
            updateInterval={updateInterval}
            setFeedUrl={setFeedUrl}
            setNumberOfPosts={setNumberOfPosts}
            setUpdateInterval={setUpdateInterval}
          />
        </div>

      </main>
    </div>
  )
}

export default App
