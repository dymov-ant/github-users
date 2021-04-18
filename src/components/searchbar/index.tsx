import React, {FC} from "react"
import searchIcon from "./searchIcon.svg"

const Searchbar: FC = () => {
  return (
    <div className="searchbar list-page__searchbar">
      <img className="searchbar__img" src={searchIcon} alt=""/>
      <input
        className="searchbar__input"
        type="text"
      placeholder="Поиск пользователя GIthub"/>
    </div>
  )
}

export default Searchbar