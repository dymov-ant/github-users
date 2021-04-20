import React, {FC} from "react"
import List from "../../components/list"
import Searchbar from "../../components/searchbar"
import {useSelector} from "react-redux"
import {TState} from "../../redux/store"

const ListPage: FC = () => {
  const usersCount = useSelector((state: TState) => state.users.length)

  return (
    <div className="list-page">
      <Searchbar/>
      {usersCount > 0 && <List variant="users"/>}
    </div>
  )
}

export default ListPage