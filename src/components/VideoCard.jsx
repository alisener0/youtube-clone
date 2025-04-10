import millify from "millify"
import { useState } from "react"

const VideoCard = ({video}) => {
    console.log(video)
    const [isHover,setIsHover] = useState(false)
  return (
    <div className="cursor-pointer"
    onMouseEnter={()=>setIsHover(true)}
    onMouseLeave={setIsHover(false)}
    >
      {/* resim alanı */}
      <div>
        <img 
        className="rounded-lg w-full h-full"
        src={
           isHover && video.richThumbnail 
            ? video?.richThumbnail[0].url 
            : video?.thumbnail[0].url 
        } 
            alt="" />
      </div>
      {/* video alt alanı */}
      <div className="flex gap-4 mt-5">
        <img 
        className="w-14 h-14 rounded-full c-pic" 
        src={video?.channelThumbnail && video?.channelThumbnail[0].url }
         alt="logo" 
         />
         <div>
            <h4 className="font-bold line-clamp-2">{video?.title}</h4>
            <p>{video?.channelTitle}</p>
            <div className="flex gap-3">
                <p className="flex gap-1">
                    <span> {millify(video?.viewCount)} </span>
                    <span className="">Görüntülenme</span>
                </p>
                <p>{video?.publishedTimeText}</p>
            </div>
         
         
         
         </div>
      </div>
    </div>
  )
}

export default VideoCard
