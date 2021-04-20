import React, {FC} from "react"
import {useHistory} from "react-router-dom"
import Checkbox from "../../checkbox"
import {USER_ROUTE} from "../../../utilits/constants"
import {IVariantList} from "../../../types/types"

interface IListItemProps {
  avatar: string
  name: string
  email?: string | null
  organization: string
  role?: string
  activity: number
  createdAt?: string
}

const ListItem: FC<IListItemProps & IVariantList> = ({
                                                       email,
                                                       avatar,
                                                       activity,
                                                       createdAt,
                                                       name,
                                                       organization,
                                                       role,
                                                       variant
                                                     }) => {
  const history = useHistory()

  const handleRowClick = () => {
    if (variant === "users") {
      console.log("push")
      history.push(USER_ROUTE)
    }
  }

  return (
    <tr className="list-item">
      <td width={63} onClick={() => {
      }}>
        <Checkbox/>
      </td>
      <td width={467} onClick={handleRowClick}>
        <div className="list-item__name">
          <img src={avatar} alt=""/>
          <span>{name}</span>
        </div>
      </td>
      {
        variant === "users"
        && <td width={234} onClick={handleRowClick}>
          {email || "Email не указан"}
        </td>
      }
      <td width={144} onClick={handleRowClick}>
        {organization}
      </td>
      <td width={143} onClick={handleRowClick}>
        {role || "Не указано"}
      </td>
      <td width={276} onClick={handleRowClick}>
        {activity}
      </td>
      <td width={140} align="center" onClick={handleRowClick}>
        {createdAt}
      </td>
    </tr>
  )
}

export default ListItem