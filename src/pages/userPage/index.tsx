import React, {FC} from "react"
import List from "../../components/list"
import UserInfo from "../../components/userInfo"

const UserPage: FC = () => {
  return (
    <div>
      <UserInfo/>
      <List/>
    </div>
  )
}

export default UserPage