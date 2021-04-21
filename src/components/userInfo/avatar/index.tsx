import React, {FC} from "react"
import imgHover from "./image.svg"

interface IAvatarProps {
  src: string
}

const Avatar: FC<IAvatarProps> = ({src}) => {
  return (
    <div className="avatar">
      <img
        className="main-img"
        src={src}
        alt=""
      />
      <img
        className="hover-img"
        src={imgHover}
        alt=""/>
    </div>
  )
}

export default Avatar