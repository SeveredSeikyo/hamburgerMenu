// Write your code here
import {useState, useEffect, useRef} from 'react'

const images = {
  small: 'https://assets.ccbp.in/frontend/react-js/about-sm-img.png',
  large: 'https://assets.ccbp.in/frontend/react-js/about-lg-img.png',
}

const About = () => {
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
      <img src={imageSrc} alt="about" style={{width: '100%'}} />
    </div>
  )
}

export default About
