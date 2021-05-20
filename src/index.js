import React, { useEffect, useRef } from "react"
import ReactDOM from "react-dom"

const useClick = (onClick) => {
  const element = useRef().current
  useEffect(() => {
    if (typeof onClick !== "function") {
      element?.addEventListner("click", onClick)
    }
    return () => {
      if (typeof onClick !== "function") {
        element?.removeEventListner("click", onClick)
      }
    }
  }, [])
}

const App = () => {
  const sayHello = () => {
    console.log("say HELLO !")
  }
  const title = useClick(sayHello)
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
