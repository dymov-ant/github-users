import React, {FC, useEffect} from "react"
import {Link, useParams} from "react-router-dom"
import List from "../../components/list"
import UserInfo from "../../components/userInfo"
import {LIST_ROUTE} from "../../utilits/constants"
import arrowIcon from "./arrow.svg"
import {useDispatch, useSelector} from "react-redux"
import {TState} from "../../redux/store"
import {getActiveUser} from "../../redux/actions"
import Spinner from "../../components/spinner"

interface IRouteParams {
  login: string
}

const UserPage: FC = () => {
  const dispatch = useDispatch()
  const {login} = useParams<IRouteParams>()
  const isLoading = useSelector((state: TState) => state.isLoading)

  useEffect(() => {
    dispatch(getActiveUser(login))
  }, [dispatch, login])

  return (
    isLoading
      ? <Spinner/>
      : <div className="user-page">
        <div className="user-page__wrapper">
          <Link to={LIST_ROUTE} className="user-page__link">
            <img src={arrowIcon} alt=""/>
            Вернуться назад
          </Link>
          {/*{isLoading ? <Spinner/> : <UserInfo/>}*/}
          <UserInfo/>
        </div>
        <h2 className="user-page__title">Список проектов</h2>
        <List variant="repos"/>
      </div>
  )
}

export default UserPage