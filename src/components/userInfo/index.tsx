import React, {FC} from "react"
import Avatar from "./avatar"

const UserInfo: FC = () => {
  return (
    <div className="user-info">
      <div className="user-info__avatar">
        <Avatar/>
      </div>

      <div className="user-info__info">
        <div className="user-info__item info-item">
          <p className="info-item__title">Имя</p>
          <p className="info-item__text">Jane</p>
        </div>
        <div className="user-info__item info-item">
          <p className="info-item__title">Никнейм</p>
          <p className="info-item__text">Jane</p>
        </div>
        <div className="user-info__item info-item">
          <p className="info-item__title">Активность</p>
          <p className="info-item__text">50%</p>
        </div>
      </div>
    </div>
  )
}

export default UserInfo