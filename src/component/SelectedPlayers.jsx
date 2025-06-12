const SelectedPlayers = ({ players, onRemove }) => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {players.map((player, index) => (
        <div
          key={index}
          className="bg-white shadow-md p-4 rounded-lg space-y-2"
        >
          <div className="flex justify-between">
            <h3 className="text-lg font-bold">{player.player_name}</h3>
            <p>{player.type}</p>
          </div>
          <p className="text-gray-600">{player.role}</p>
          <button
            onClick={() => onRemove(player)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-800 transition"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default SelectedPlayers;
