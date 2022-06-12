import { useRef, useState, useEffect } from "react"

const useHover = () => {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ref.current?.addEventListener('mouseenter', enter)
    ref.current?.addEventListener('mouseleave', leave)

    // clears the event component will unmount
    return () => {
      ref.current?.removeEventListener('mouseenter', enter)
      ref.current?.removeEventListener('mouseleave', leave)
    }

  }, [])
  

 const enter = () => setHovered(true)
 const leave = () => setHovered(false)

 return [hovered, ref]

}

export default useHover