export const useClick = (onClick) => {
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
