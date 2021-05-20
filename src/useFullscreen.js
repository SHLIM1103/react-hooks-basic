export const useFullscreen = (callback) => {
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
