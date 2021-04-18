import React, {FC} from "react"
import {useHistory} from "react-router-dom"
import Checkbox from "../../checkbox"
import {IVariantList} from "../../../types/common"
import {USER_ROUTE} from "../../../utilits/constants"

const ListItem: FC<IVariantList> = ({variant}) => {
  const history = useHistory()

  const handleRowClick = () => {
    if (variant === "users") {
      console.log("push")
      history.push(USER_ROUTE)
    }
  }

  return (
    <tr className="list-item">
      <td width={63} onClick={() => {}}>
        <Checkbox/>
      </td>
      <td width={467} onClick={handleRowClick}>
        <div className="list-item__name">
          <img src="https://www.coalitionrc.com/wp-content/uploads/2018/10/placeholder.jpg" alt=""/>
          <span>Название</span>
        </div>
      </td>
      {
        variant === "users"
        && <td width={234} onClick={handleRowClick}>
          lindsey.stroud@gmail.com
        </td>
      }
      <td width={144} onClick={handleRowClick}>
        Hatchbuck
      </td>
      <td width={143} onClick={handleRowClick}>
        Manager
      </td>
      <td width={276} onClick={handleRowClick}>
        50 %
      </td>
      <td width={140} align="center" onClick={handleRowClick}>
        5 Minutes ago
      </td>
    </tr>
  )
}

export default ListItem