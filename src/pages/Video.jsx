import React, { useEffect, useRef } from 'react'
import { videos } from '../assets/assets'

const Video = () => {
  // Teeno videos ko control karne ke liye unique references (refs)
  const videoRef1 = useRef(null)
  const videoRef2 = useRef(null)
  const videoRef3 = useRef(null)

  useEffect(() => {
    // Page load hone ke 5 seconds (5000ms) baad pehli video start hogi
    const timer = setTimeout(() => {
      if (videoRef1.current) {
        videoRef1.current.play().catch(error => {
          console.log("Autoplay blocked by browser. User interaction might be needed:", error)
        })
      }
    }, 2000)

    // Cleanup timer agar user page se pehle hi chala jaye
    return () => clearTimeout(timer)
  }, [])

  // Pehli video khatam hone par doosri chalane ka function
  const handleVideo1End = () => {
    if (videoRef2.current) {
      videoRef2.current.play()
    }
  }

  // Doosri video khatam hone par teesri chalane ka function
  const handleVideo2End = () => {
    if (videoRef3.current) {
      videoRef3.current.play()
    }
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-32 pb-20 px-4 bg-inherit">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1200px] justify-items-center">
        
        {/* First Video: wellme3 */}
        <div className="w-full max-w-[380px] shadow-2xl rounded-[2rem] overflow-hidden bg-black border border-white/5 ring-1 ring-white/10">
          <video 
            ref={videoRef1}
            src={videos.wellme3} 
            controls 
            playsInline
            controlsList="nofullscreen"
            onEnded={handleVideo1End} // Video khatam hote hi trigger hoga
            className="w-full h-full block aspect-[9/16] object-cover"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Second Video: wellme */}
        <div className="w-full max-w-[380px] shadow-2xl rounded-[2rem] overflow-hidden bg-black border border-white/5 ring-1 ring-white/10">
          <video 
            ref={videoRef2}
            src={videos.wellme} 
            controls 
            playsInline
            controlsList="nofullscreen"
            onEnded={handleVideo2End} // Video khatam hote hi trigger hoga
            className="w-full h-full block aspect-[9/16] object-cover"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Third Video: wellme2 */}
        <div className="w-full max-w-[380px] shadow-2xl rounded-[2rem] overflow-hidden bg-black border border-white/5 ring-1 ring-white/10">
          <video 
            ref={videoRef3}
            src={videos.wellme2} 
            controls 
            playsInline
            controlsList="nofullscreen"
            className="w-full h-full block aspect-[9/16] object-cover"
          >
            Your browser does not support the video tag.
          </video>
        </div>

      </div>
    </div>
  )
}

export default Video