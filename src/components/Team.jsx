import React, { useState } from "react";

const Team = () => {
  const [team, setTeam] = useState(11);

  const addPlayer = () => {
    const update = team + 1;
    update <= 20 ? setTeam(update) : setTeam(20);
  };
  const removePlayer = () => {
    const update = team - 1;
    update >= 8 ? setTeam(update) : setTeam(8);
  };

  const stylesTeam = {
    marginTop: "10px",
    border: "2px solid purple",
    borderRadius: "10px",
    padding: "10px",
  };
  return (
    <div style={stylesTeam}>
      <h1>Player : {team}</h1>

      <button onClick={addPlayer}>add</button>
      <button onClick={removePlayer}>remove</button>
    </div>
  );
};

export default Team;
