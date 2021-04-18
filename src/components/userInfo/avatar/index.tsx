import React, {FC} from "react"
import imgHover from "./image.svg"

const Avatar: FC = () => {
  return (
    <div className="avatar">
      <img
        className="main-img"
        src="https://www.coalitionrc.com/wp-content/uploads/2018/10/placeholder.jpg"
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