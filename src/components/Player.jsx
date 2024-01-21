import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setplayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(editing => !editing);
  }

  function handleChange(event) {
    setplayerName(event.target.value);
  }

  let changeablePlayerName = <span className="player-name">{playerName}</span>,
    btnCaption = "Edit";

  if (isEditing) {
    changeablePlayerName = <input type="text" value={playerName} onChange={handleChange} />;
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {changeablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  )
}