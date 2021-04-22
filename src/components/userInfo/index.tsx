import React, {FC} from "react"
import Avatar from "./avatar"
import {useSelector} from "react-redux"
import {TState} from "../../redux/store"

const UserInfo: FC = () => {
  const user = useSelector((state: TState) => state.activeUser)
  return (
    user ? <div className="user-info">
        <div className="user-info__avatar">
          <Avatar src={user.avatar_url}/>
        </div>

        <div className="user-info__info">
          <div className="user-info__item info-item">
            <p className="info-item__title">Имя</p>
            <p className="info-item__text">{user.name || "Не указано"} </p>
          </div>
          <div className="user-info__item info-item">
            <p className="info-item__title">Никнейм</p>
            <p className="info-item__text">{user.login}</p>
          </div>
          <div className="user-info__item info-item">
            <p className="info-item__title">Подписчики</p>
            <p className="info-item__text">{user.followers}</p>
          </div>
        </div>
      </div>
      : null
  )
}

export default UserInfo