import React from 'react'

class Name extends React.Component {
  constructor() {
    super()

    this.state = {
      name: ""
    }
  }

  render() {
    return (
      <div>
        <p>{`My name is ${this.state.name}`}</p>
        <input
          type="text"
          onChange={(e) => {
            this.setState({ name: e.target.value })
          }}
        />
      </div>
    )
  }
}

export default Name