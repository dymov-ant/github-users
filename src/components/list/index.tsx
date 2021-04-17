import React, {FC} from "react"
import ListItem from "./item"
import Checkbox from "../checkbox"

const List: FC = () => {
  return (
    <div>
      <table className="table">
        <thead>
        <tr className="table__header">
          <th><Checkbox/></th>
          <th>Имя</th>
          <th>Email</th>
          <th>Имя компании</th>
          <th>Роль</th>
          <th>Активность</th>
          <th>Дата регистрации</th>
        </tr>
        </thead>
        <tbody>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => <ListItem key={item}/>)}
        </tbody>
      </table>
    </div>
  )
}

export default List