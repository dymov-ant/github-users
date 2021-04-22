import React, {FC} from "react"
import {TRepo, TUser} from "../../../types/types"
import Checkbox from "../../checkbox"
import {USER_ROUTE} from "../../../utilits/constants"
import {useHistory} from "react-router-dom"
import {dateAgo} from "../../../utilits/dateAgo"

interface IUserProps {
  type: "user"
  item: TUser
}

interface IRepoProps {
  type: "repo"
  item: TRepo
}

const ListItem: FC<IUserProps | IRepoProps> = (props) => {
  const history = useHistory()

  const onRowClick = () => {
    if (props.type === "user") {
      history.push(USER_ROUTE + `/${props.item.login}`)
    }
  }

  return (
    <tr className="list-item">
      <td width={63}>
        <Checkbox/>
      </td>
      <td width={467} onClick={onRowClick}>
        <div className="list-item__name">
          <img
            src={props.type === "user" ? props.item.avatar_url : props.item.owner?.avatar_url}
            alt=""
          />
          <span>{props.type === "user" ? props.item.name || props.item.login : props.item.name}</span>
        </div>
      </td>
      {
        props.type === "user" &&
        <td width={234} onClick={onRowClick}>
          {props.item.email || "Email не указан"}
        </td>
      }
      <td width={144} onClick={onRowClick}>
        {props.type === "user" ? props.item.company || "Не указано" : props.item.stargazers_count}
      </td>
      <td width={143} onClick={onRowClick}>
        {props.type === "user" ? props.item.followers : props.item.owner?.login || "Не указано"}
      </td>
      <td width={276} onClick={onRowClick}>
        {props.type === "user" ? props.item.location || "Не указано" : props.item.language || "Не указано"}
      </td>
      <td width={140} align="center" onClick={onRowClick}>
        {props.type === "user" ? dateAgo(props.item.created_at) : props.item.pushed_at ? dateAgo(props.item.pushed_at) : "Не указано"}
      </td>
    </tr>
  )
}

export default ListItem