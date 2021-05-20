import React, { useState } from "react"
import ReactDOM from "react-dom"

const content = [
  { tab: "Section 1", content: "I am the content of the Section 1" },
  { tab: "Section 2", content: "I am the content of the Section 2" }
]

const useTabs = (initTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initTab)
  if (!allTabs || !Array.isArray(allTabs)) {
    return
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  }
}

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content)
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
