import React, {FC} from "react"
import { Link } from "react-router-dom"
import List from "../../components/list"
import UserInfo from "../../components/userInfo"
import {LIST_ROUTE} from "../../utilits/constants"
import arrowIcon from "./arrow.svg"

const UserPage: FC = () => {
  return (
    <div className="user-page">
      <div className="user-page__wrapper">
        <Link to={LIST_ROUTE} className="user-page__link">
          <img src={arrowIcon} alt=""/>
          Вернуться назад
        </Link>
        <UserInfo/>
      </div>
      <h2 className="user-page__title">Список проектов</h2>
      <List variant="projects"/>
    </div>
  )
}

export default UserPage