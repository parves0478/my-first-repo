import React, { useRef } from 'react'
import './Video.css'
import video from '../../video/v.mp4'
const Video = ({playState,setPlayState}) => {
  const player=useRef(null);
  const closePlayer=(e)=>{
    if(e.target===player.current){
      setPlayState(false)
    }
  }

  return (
    <div onClick={closePlayer} ref={player} className={`video-player ${playState?'':'hide'}`}>

<video src={video} autoPlay muted controls></video>

    </div>
  )
}

export default Video