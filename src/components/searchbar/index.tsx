import React, {ChangeEvent, FC, useEffect, useState} from "react"
import searchIcon from "./searchIcon.svg"
import {useDebounce} from "../../utilits/useDebounce"
import {useDispatch} from "react-redux"
import {clearUsers, getUsers, setQ} from "../../redux/actions"

const Searchbar: FC = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState("")
  const debouncedTerm = useDebounce(value, 600)

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    if (debouncedTerm) {
      dispatch(clearUsers())
      dispatch(setQ(debouncedTerm))
      dispatch(getUsers(debouncedTerm))
    }
  }, [debouncedTerm, dispatch])

  return (
    <>
      <div className="searchbar list-page__searchbar">
        <img className="searchbar__img" src={searchIcon} alt=""/>
        <input
          autoFocus
          className="searchbar__input"
          type="text"
          placeholder="Поиск пользователя GIthub"
          onChange={changeHandler}
          value={value}
        />
      </div>
    </>
  )
}

export default Searchbar