import React, {FC} from "react"
import {useSelector} from "react-redux"
import {TState} from "../../redux/store"

const Spinner: FC = () => {
  const isLoading = useSelector((state: TState) => state.isLoading)
  const q = useSelector((state: TState) => state.q)
  const userCount = useSelector((state: TState) => state.users.length)
  console.log(isLoading, q, userCount)
  return (
    <div className="spinner">
      {
        isLoading
          ? "Поиск..."
          : userCount === 0
            ? q
              ? "Ничего не найдено"
              : "Введите логин для поиска"
            : ""
      }
    </div>
  )
}

export default Spinner