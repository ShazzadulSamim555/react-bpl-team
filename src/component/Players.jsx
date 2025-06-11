import { useState } from "react";
import Player from "./Player";

const Players = () => {
    const [players, serPlayers] = useState([]);
    fetch('/public/players.json')
        .then(response => response.json())
        .then(data => serPlayers(data))
    
    
    return (
        <div className="grid grid-cols-3 gap-5">
            {
                players.map((player) => <Player player={player}> </Player>)
            }
        </div>
    );
};

export default Players;