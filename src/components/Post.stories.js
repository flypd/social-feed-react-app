import { storiesOf } from '@storybook/react'
import Post from './Post'
import React from 'react'

const post = {
  'created_at': 'Fri Dec 29 19:15:04 +0000 2017',
  'id': 946821889648979968,
  'text': 'The battle is life or death, but that doesn’t mean love plays no part. \n#shifters #menage #paranormal #ebook… https://t.co/61xUthkXFN',
  'user': {
    'id': 723462589,
    'name': 'Lori King',
  }
}

storiesOf('Post', module)
  .add('default', () => <Post author={post.user.name} created_at={post.created_at} body={post.text}/>)