import React from 'react'
import { videos } from '../assets/assets'

const Video = () => {
  return (
    /* 'pt-32' se video ko top (Nav menu) se acha khasa "breathing room" milega.
      'pb-20' niche se gap dega taaki page "cut" na lage.
    */
    <div className="min-h-screen w-full flex flex-col items-center pt-32 pb-20 px-4 bg-inherit">
      
      {/* Video Container: 
        max-w-[380px] rakha hai taaki vertical video desktop par "not too big" lage.
        shadow-2xl aur rounded-3xl ise premium "app" look denge.
      */}
      <div className="w-full max-w-[380px] shadow-2xl rounded-[2rem] overflow-hidden bg-black border border-white/5 ring-1 ring-white/10">
        
        <video 
          src={videos.wellme} 
          controls 
          playsInline
          /* 'controlsList="nofullscreen"' zyadatar modern browsers mein fullscreen button hide kar deta hai.
            'aspect-[9/16]' side ke black borders ko eliminate karta hai.
          */
          controlsList="nofullscreen"
          className="w-full h-full block aspect-[9/16] object-cover"
        >
          Your browser does not support the video tag.
        </video>

      </div>
    </div>
  )
}

export default Video