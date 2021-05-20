export const useHover = (onHover) => {
  const element = useRef()
  if (typeof onHover !== "function") {
    return
  }
  useEffect(() => {
    if (element.current) {
      element.current.addEventListner("mouseenter", onHover)
    }
    return () => {
      if (element.current) {
        element.current.removeEventListner("mouseenter", onHover)
      }
    }
  }, [])
  return element
}
