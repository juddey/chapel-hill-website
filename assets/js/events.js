import React, { useState, useEffect } from 'react'
import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: 'af2d8d3d36f1fc84fa07c489f9',
  version: 'v2'
})


function Events (props) {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    api.posts
      .browse({ limit: 5, filter: 'tag:events', include: 'tags,authors' })
      .then(posts => console.log(posts))
      .catch(err => {
        console.error(err)
      })
  })


  if (posts.length == 0) {
    return <div />
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid red',
        alignItems: 'center'
      }}
    >

      {posts.map((post, i) => (
          <div>
            <span key={i}>{post.codeinjection_foot}</span>
        </div>
      ))}
    </div>
  )
}

export default Events
