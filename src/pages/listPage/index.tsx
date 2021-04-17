import React, {FC} from "react"
import List from "../../components/list"
import Searchbar from "../../components/searchbar"

const ListPage: FC = () => {
  return (
    <div className="list-page">
      <Searchbar/>
      <List/>
    </div>
  )
}

export default ListPage