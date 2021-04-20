import React, {FC, useEffect} from "react"
import List from "../../components/list"
import Searchbar from "../../components/searchbar"
import {useDispatch, useSelector} from "react-redux"
import {getUsers} from "../../redux/actions"
import {TState} from "../../redux/store"


const ListPage: FC = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state: TState) => state.isLoading)

  useEffect(() => {
    dispatch(getUsers("dy"))
    console.log("eff")
  }, [dispatch])

  if (isLoading) {
    return <h1>Загрузка</h1>
  }

  return (
    <div className="list-page">
      <Searchbar/>
      <List variant="users"/>
    </div>
  )
}

export default ListPage