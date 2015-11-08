import React from 'react'

class Calendar extends React.Component {
  render() {
    const events = [
      { id: 0, title: 'Essay due' },
      { id: 1, title: 'Dynamic' },
      { id: 2, title: 'The Big Bang' },
    ]

    return (
      <div>
        <h2>Calendar</h2>
        <ul>
          {events.map(event => (
            <li key={event.id}>{event.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Calendar
