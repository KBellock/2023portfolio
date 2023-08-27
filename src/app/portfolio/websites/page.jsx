import React from 'react'
import Card from '@/components/card/Card'
import websites from './websites'

function Websites() {
  return (
    <div>
      <h1>React Native Projects</h1>
        <div>
            {websites.map((website) => (
                <Card application={website} key={website.id} />
            ))}
        </div>
    </div>
  )
}

export default Websites
