import React, {ChangeEvent, FC, useEffect, useState} from "react"
import searchIcon from "./searchIcon.svg"
import {useDebounce} from "../../utilits/useDebounce"
import {useDispatch, useSelector} from "react-redux"
import {getUsers} from "../../redux/actions"
import {TState} from "../../redux/store"

const Searchbar: FC = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState("")
  const debouncedTerm = useDebounce(value, 1000)
  const isLoading = useSelector((state: TState) => state.isLoading)
  const userCount = useSelector((state: TState) => state.users.length)


  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  
  useEffect(() => {
    if (debouncedTerm) {
      dispatch(getUsers(debouncedTerm))
    }
  }, [debouncedTerm, dispatch])

  return (
    <>
      <div className="searchbar list-page__searchbar">
        <img className="searchbar__img" src={searchIcon} alt=""/>
        <input
          className="searchbar__input"
          type="text"
          placeholder="Поиск пользователя GIthub"
          onChange={changeHandler}
          value={value}
        />
      </div>
      <div className="searchbar__spinner">
        {isLoading
          ? "Поиск..."
          : userCount === 0
            ? debouncedTerm
              ? "Ничего не найдено"
              : "Введите логин для поиска"
            : ""
        }
      </div>
    </>
  )
}

export default Searchbar