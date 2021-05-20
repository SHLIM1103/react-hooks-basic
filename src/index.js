import React, { useRef } from "react"
import ReactDOM from "react-dom"

const useFullscreen = (callback) => {
  const element = useRef()
  const triggerFullscreen = () => {
    if (element.current) {
      element.current.requestFullscreen()
      if (callback && typeof callback === "function") {
        callback(true)
      }
    }
  }
  const exitFullscr = () => {
    if (document.fullscreenElement !== null) {
      document.exitFullscreen()
    }
  }
  return { element, triggerFullscreen, exitFullscr }
}

const App = () => {
  const callback = (isFull) => {
    console.log(isFull ? "We are full" : "We are small")
  }
  const { element, triggerFullscreen, exitFullscr } = useFullscreen(callback)
  return (
    <div className="App">
      <button onClick={triggerFullscreen}>Make Fullscreen</button>
      <div ref={element}>
        <img
          src="http://www.behindpress.com/news/photo/202005/7886_17019_552.jpg"
          alt="handsome guy"
        />
        <button onClick={exitFullscr}>Exit Fullscreen</button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
