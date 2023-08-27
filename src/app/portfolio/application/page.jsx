import React from 'react'
import applications from './applications'
import Card from '@/components/card/Card'

function page() {
  return (
    <div>
      <h1>React Native Projects</h1>
        <div>
            {applications.map((application) => (
                <Card application={application} key={application.id} />
            ))}
        </div>
    </div>
  )
}

export default page
