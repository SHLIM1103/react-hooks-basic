export const useClick = (onClick) => {
  const element = useRef().current
  useEffect(() => {
    if (element && typeof onClick !== "function") {
      element.addEventListner("click", onClick)
    }
    return () => {
      if (element && typeof onClick !== "function") {
        element.removeEventListner("click", onClick)
      }
    }
  }, [])
  return element
}
