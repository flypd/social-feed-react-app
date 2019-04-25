import React from 'react'
import { formatDate } from '../utils'

export default function Post ({ author, body, createdAt }) {
  return (
    <article className="card">
      <div className='card-body'>

        <div className='card-title'>
          <h2>
            <span className='mr-2 fa fa-user'/>
            {author}
          </h2>
        </div>

        <div className='card-subtitle text-muted mb-2'>
          <small>{formatDate(createdAt)}
          </small>
        </div>

        <div className='card-text'>
          {body}
        </div>

      </div>
    </article>
  )
}
