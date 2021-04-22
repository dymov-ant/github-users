import React, {ChangeEvent, FC, useEffect} from "react"
import searchIcon from "./searchIcon.svg"
import {useDebounce} from "../../utilits/useDebounce"
import {useDispatch, useSelector} from "react-redux"
import {clearUsers, getUsers, setQ} from "../../redux/actions"
import {TState} from "../../redux/store"

const Searchbar: FC = () => {
  const dispatch = useDispatch()
  const q = useSelector((state: TState) => state.q)
  const debouncedTerm = useDebounce(q, 1000)

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setQ(event.target.value))
  }

  useEffect(() => {
    if (debouncedTerm) {
      dispatch(clearUsers())
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
          value={q}
        />
      </div>
    </>
  )
}

export default Searchbar