import React, {FC} from "react"
import Checkbox from "../../checkbox"

const ListItem: FC = () => {
  return (
    <tr className="list-item">
      <td width={63}>
        <Checkbox/>
      </td>
      <td width={467}>
        <div className="list-item__name">
          <img src="https://www.coalitionrc.com/wp-content/uploads/2018/10/placeholder.jpg" alt=""/>
          <span>Lindsey Stroud</span>
        </div>
      </td>
      <td width={234}>
        lindsey.stroud@gmail.com
      </td>
      <td width={144}>
        Hatchbuck
      </td>
      <td width={143}>
        Manager
      </td>
      <td width={276}>
        50 %
      </td>
      <td width={140} align="center">
        5 Minutes ago
      </td>
    </tr>
  )
}

export default ListItem