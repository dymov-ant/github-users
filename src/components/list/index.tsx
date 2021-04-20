import React, {FC} from "react"
import Checkbox from "../checkbox"
import {IVariantList} from "../../types/types"

// import {useSelector} from "react-redux"
// import {TState} from "../../redux/store"

const List: FC<IVariantList> = ({variant,}) => {
  // const users = useSelector((state: TState) => state.users)
  // const repos =  useSelector((state: TState) => state.activeUser?.repos)

  return (
    <div>
      <table className="table">
        <thead>
        <tr className="table__header">
          <th><Checkbox/></th>
          <th>{variant === "users" ? "Имя" : "Название"}</th>
          {variant === "users" && <th>Email</th>}
          <th>Имя компании</th>
          <th>{variant === "users" ? "Роль" : "Автор"}</th>
          <th>Активность</th>
          <th>{variant === "users" ? "Дата регистрации" : "Последний коммит"}</th>
        </tr>
        </thead>
        <tbody>
        {
          // variant === "users"
          //   ? users.map(item => <ListItem variant="users" {...item} key={item.name}/>)
          //   // : repos && repos.map(item => <ListItem variant="projects" key={item.name} {...item}/>)
          //   : null
        }
        {/*{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => <ListItem  variant={variant} key={item}/>)}*/}
        </tbody>
      </table>
    </div>
  )
}

export default List