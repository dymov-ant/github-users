import React, {FC, useState} from "react"

const Checkbox: FC = () => {
  const [isChecked, setIsChecked] = useState(false)
  const toggleChecked = () => {
    setIsChecked(prevState => !prevState)
  }

  return (
    <span className="checkbox" onClick={toggleChecked}>
      <input type="checkbox" checked={isChecked} onChange={() => {}}/>
      <span/>
    </span>
  )
}

export default Checkbox