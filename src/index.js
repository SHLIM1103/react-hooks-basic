import React, { useState } from "react"
import ReactDOM from "react-dom"

const useInput = (initValue, validator) => {
  const [value, setValue] = useState(initValue)
  const onChange = (event) => {
    const {
      target: { value }
    } = event
    let willUpdate = true
    if (typeof validator === "function") {
      willUpdate = validator(value)
    }
    if (willUpdate) {
      setValue(value)
    }
  }
  return { value, onChange }
}

const App = () => {
  const maxLength = (value) => value.length < 10
  const name = useInput("Ms.", maxLength)

  return (
    <>
      <h1>Hello</h1>
      <input placeholder="Input your name" {...name} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
