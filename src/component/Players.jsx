import Player from "./Player";

const Players = ({ players, onSelect }) => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {players.map(player => (
        <Player key={player.id} player={player} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default Players;
