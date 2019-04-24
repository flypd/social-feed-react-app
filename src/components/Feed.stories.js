import { storiesOf } from '@storybook/react'
import Feed from './Feed'
import React from 'react'

const posts = [
  {
    'created_at': 'Fri Dec 29 19:15:04 +0000 2017',
    'id': 946821889648979968,
    'text': 'The battle is life or death, but that doesn’t mean love plays no part. \n#shifters #menage #paranormal #ebook… https://t.co/61xUthkXFN',
    'user': {
      'id': 723462589,
      'name': 'Lori King',
    }
  },
  {
    'created_at': 'Fri Dec 29 19:11:09 +0000 2017',
    'id': 946820903286972416,
    'text': '*Little Computer People https://t.co/nfjYauzFMS  #ScienceFiction #Deals #Sponsor #Humor A Love Story… https://t.co/f0ETvfRcMP',
    'user': {
      'id': 790576835478249473,
      'name': 'Science Fiction Book',
    }
  },
  {
    'created_at': 'Fri Dec 29 19:01:00 +0000 2017',
    'id': 946818350285328384,
    'text': 'Hi new tweeps &amp; old.\nHope you\'re having fun\nLove the SO, RTs, and likes.\nVisit my #kindle #author website:… https://t.co/VZpaywm8eg',
    'user': {
      'id': 930126626968428546,
      'name': 'M. K. Theodoratus',
    }
  }
]

storiesOf('Feed', module)
  .add('default', () => <Feed posts={posts}/>)