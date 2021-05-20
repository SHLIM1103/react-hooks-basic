const content = [
  { tab: "Section 1", content: "I am the content of the Section 1" },
  { tab: "Section 2", content: "I am the content of the Section 2" }
]

export const useTabs = (initTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initTab)
  if (!allTabs || !Array.isArray(allTabs)) {
    return
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  }
}
