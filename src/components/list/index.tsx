import React, {FC} from "react"
import Checkbox from "../checkbox"
import {useSelector} from "react-redux"
import {TState} from "../../redux/store"
import ListItem from "./item"

interface IListProps {
  variant: "users" | "repos"
}

const List: FC<IListProps> = ({variant,}) => {
  const users = useSelector((state: TState) => state.users)
  const repos = useSelector((state: TState) => state.repos)

  return (
    <div>
      <table className="table">
        <thead>
        <tr className="table__header">
          <th><Checkbox/></th>
          <th>{variant === "users" ? "Имя" : "Название"}</th>
          {variant === "users" && <th>Email</th>}
          {/*<th>Имя компании</th>*/}
          <th>{variant === "users" ? "Имя компании" : "Количество звезд"}</th>
          <th>{variant === "users" ? "Подписчики" : "Автор"}</th>
          <th>{variant === "users" ? "Местоположение" : "Язык"}</th>
          <th>{variant === "users" ? "Дата регистрации" : "Последний пуш"}</th>
        </tr>
        </thead>
        <tbody>
        {
          variant === "users"
            ? users.map(item => <ListItem type="user" item={item} key={item.id}/>)
            : repos.map(item => <ListItem type="repo" item={item} key={item.id}/>)
        }
        </tbody>
      </table>
    </div>
  )
}

export default List