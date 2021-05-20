import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"

const useTitle = (initTitle) => {
  const [title, setTitle] = useState(initTitle)
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title")
    htmlTitle.innerText = title
  }
  useEffect(updateTitle, [title])
  return setTitle
}

const App = () => {
  const titleUpdater = useTitle("Loading...")
  setTimeout(() => titleUpdater("Home"), 2000)
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
