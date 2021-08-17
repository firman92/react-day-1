import React from 'react'
import Age from './Age'

class Person extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Benoit",
      age: 27
    }
  }

  render() {
    console.log('render Person')
    console.log(this.state.age)

    return (
      <div>
        <Age value={27} />
        <button
          onClick={() => {
            this.setState({ age: this.state.age + 1 })
          }}
        >
          +1
        </button>
      </div>
    )
  }
}

export default Person