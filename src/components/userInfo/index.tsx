import React, {FC} from "react"
import Avatar from "./avatar"

interface IUserInfoProps {
  avatar: string
  name: string
  login: string
  followers: number | string
}

const UserInfo: FC<IUserInfoProps> = ({avatar, name, login, followers}) => {
  return (
    <div className="user-info">
      <div className="user-info__avatar">
        <Avatar src={avatar}/>
      </div>

      <div className="user-info__info">
        <div className="user-info__item info-item">
          <p className="info-item__title">Имя</p>
          <p className="info-item__text">{name}</p>
        </div>
        <div className="user-info__item info-item">
          <p className="info-item__title">Никнейм</p>
          <p className="info-item__text">{login}</p>
        </div>
        <div className="user-info__item info-item">
          <p className="info-item__title">Подписчики</p>
          <p className="info-item__text">{followers}</p>
        </div>
      </div>
    </div>
  )
}

export default UserInfo