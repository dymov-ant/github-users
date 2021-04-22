import React, {FC} from "react"
import List from "../../components/list"
import Searchbar from "../../components/searchbar"
import {useDispatch, useSelector} from "react-redux"
import {TState} from "../../redux/store"
import {getUsers, incPage} from "../../redux/actions"
import Spinner from "../../components/spinner"

const ListPage: FC = () => {
  const dispatch = useDispatch()
  const usersCount = useSelector((state: TState) => state.users.length)
  const q = useSelector((state: TState) => state.q)
  const page = useSelector((state: TState) => state.page)
  const isShowMore = useSelector((state: TState) => state.isShowMore)
  const isLoading = useSelector((state: TState) => state.isLoading)

  const loadUsersHandler = () => {
    dispatch(getUsers(q, page + 1))
    dispatch(incPage())
  }

  return (
    <div className="list-page">
      <Searchbar/>
      {usersCount > 0 && <List variant="users"/>}
      {isLoading && <Spinner/>}
      {
        (usersCount > 0 && isShowMore)
          && <div className="list-page__btn">
          <button className="btn" onClick={loadUsersHandler} disabled={isLoading}>Показать еще</button>
        </div>
      }
    </div>
  )
}

export default ListPage