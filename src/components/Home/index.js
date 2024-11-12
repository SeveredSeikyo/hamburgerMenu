// Write your code here
// Write your code here
import {useState, useEffect, useRef} from 'react'

const images = {
  small: 'https://assets.ccbp.in/frontend/react-js/home-sm-img.png',
  large: 'https://assets.ccbp.in/frontend/react-js/home-lg-img.png',
}

const Home = () => {
  const [imageSrc, setImageSrc] = useState(images.large) // default image
  const containerRef = useRef()

  useEffect(() => {
    const updateImageSrc = () => {
      const width = containerRef.current.offsetWidth

      if (width < 600) {
        setImageSrc(images.small)
      } else {
        setImageSrc(images.large)
      }
    }

    // Initialize on mount
    updateImageSrc()

    // Listen for resize events
    window.addEventListener('resize', updateImageSrc)

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', updateImageSrc)
    }
  }, [])

  return (
    <div ref={containerRef} style={{width: '100%', maxWidth: '1200px'}}>
      <img src={imageSrc} alt="home" style={{width: '100%'}} />
    </div>
  )
}

export default Home
