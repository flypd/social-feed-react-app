import { storiesOf } from '@storybook/react'
import { object, withKnobs } from '@storybook/addon-knobs/react'
import Post from './Post'
import React from 'react'

const post = {
  'createdAt': 'Fri Dec 29 19:15:04 +0000 2017',
  'id': 946821889648979968,
  'body': 'The battle is life or death, but that doesn’t mean love plays no part. \n#shifters #menage #paranormal #ebook… https://t.co/61xUthkXFN',
  'author': 'Lori King',
}

storiesOf('Post', module)
  .addDecorator(withKnobs)
  .add('default', () =>
    <Post
      {...object('post', post)}
    />,
  )
