import React, {FC} from "react"
import ListItem from "./item"
import Checkbox from "../checkbox"
import {IVariantList} from "../../types/common"

const List: FC<IVariantList> = ({variant}) => {
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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => <ListItem variant={variant} key={item}/>)}
        </tbody>
      </table>
    </div>
  )
}

export default List